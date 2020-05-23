import fs from 'fs';
import xml_digester from 'xml-digester';

var digester = xml_digester.XmlDigester({});

var maps = new Map();

export const initMapper = () => {
    fs.readdir(__dirname + '/mappers', (e, f) => {
        for(var file of f){
            digester.digest(fs.readFileSync(__dirname + '/mappers/' + file), (e, d) => {
                var prefix = file.split('.')[0];
                let arr = d.query;
                for(var i in d.query){
                    maps.set(prefix + '.' + i, arr[i].replace('\\n', '').trim())
                }
            })
        }
    })
}

export const getNamespace = path => maps.get(path);