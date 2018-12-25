/**
         * @file 解析和序列化odp conf文件
         * @author kaivean(kaivean@outlook.com)
         */

        const fs = require('fs');
        const _ = require('lodash');

        let lines = [];
        let i = 0;
        function getNext() {
            if (i < lines.length) {
                return lines[i++];
            }
            return null;
        }

        function parseConf(line, level) {
            let ret = {};

            while (line !== null) {
                // let originLine = line;

                line = line.trim();
                // console.log('line', line);

                line = line.split('#')[0];

                if (!line) {
                    line = getNext();

                    // line = _.trimStart(line, '[...');
                    continue;
                }


                if (line.includes('[')) {
                    line = _.trimEnd(line, ']');
                    line = _.trimStart(line, '[');
                    let num = 0;
                    let name = '';

                    let re = line.match(/(\.{1,})/g);

                    if (re) {
                        // console.log('re', re, line);

                        let matches = re[0];
                        num = matches.length; // '. 的个数'
                        // if (level < matches.length) {
                        //     let ret = parseConf(getNext(), level + 1)
                        // }
                    }



                    // console.log('num', num, level, line);



                    if (num > level) {
                        if (line.includes('@')) {
                            name = line.split('@')[1];
                            ret[name] = ret[name] || [];




                        }
                        else {
                            name = _.trimStart(line, '.');
                            ret[name] = ret[name] || {};

                        }



                        let res = parseConf(getNext(), num);

                        if (ret[name] instanceof Array) {

                            ret[name].push(res);

                        }
                        else if (ret[name] instanceof Object) {

                            ret[name] = Object.assign(ret[name], res);
                        }
                    }
                    else if (num <= level) {
                        i--;
                        break;
                    }
                }
                else if (line.includes(':')) {
                    let arr = line.split(':');
                    let key = arr[0].trim();

                    let val = arr[1].trim();

                    ret[key] = val;

                    // console.log(':句', line);
                }

                line = getNext();

            }
            // console.log('ret', ret);


            return ret;
        }


        let output = [];
        function serializeConf(key, conf, level) {
            let space = _.repeat('    ', level);
            if (conf instanceof Array) {
                // if (key) {
                //     let dians = _.repeat('.', level);
                //     output.push(`${space}[${dians}@${key}]`);
                // }

                conf.forEach(item => {
                    if (key === 'GROUP') {
                        let dians = _.repeat('.', level);
                        output.push(`${space}[${dians}@${key}]`);
                    }
                    serializeConf('', item, level);
                });
            }
            else if (conf instanceof Object) {
                if (key) {
                    let dians = _.repeat('.', level);
                    output.push(`${space}[${dians}${key}]`);
                }
                Object.keys(conf).forEach(key => {
                    let item = conf[key];
                    serializeConf(key, item, level + 1);
                });
            }
            else {
                output.push(`${space}${key}:${conf}`);
            }
        }

        function serialize(conf) {
            output = [];
            serializeConf('', conf, -1);
            return output.join('\n');
        }

        function parse(file) {
            i = 0;
            let confStr = fs.readFileSync(file, 'utf8');
            lines = confStr.split('\n');
            return parseConf(getNext(), -1);
        }

        // 用法
        // let conf = parse('./aladdin-simple.conf');
        // console.log('parseConf', JSON.stringify(conf, null, 4));
        // console.log('serialize');
        // console.log(serialize(conf));


        // module.export = {
        //     parse,
        //     serialize
        // };

        module.exports = function (app) {
            return {
                parse,
                serialize
            };
        };