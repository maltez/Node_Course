'use strict';

module.exports.transform = class FileTransformer {
    constructor(encoding) {
        this.encoding = encoding;
        this.text = '';
        this.fs = require('fs');
        this.gzip = require('zlib');
        this.options = { name: 'Copy.txt' };
    }
    getCurrData() {
        let result = '';
        var d = new Date(), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear(), hour = '' + d.getHours(), minute = '' + d.getMinutes(), second = '' + d.getSeconds();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        if (hour.length < 2)
            hour = '0' + hour;
        if (minute.length < 2)
            minute = '0' + minute;
        if (second.length < 2)
            second = '0' + second;
        return [day, month, year].join('.') + ' ' + [hour, minute, second].join(':');
    }
    Work(path) {
        const Read = this.fs.createReadStream(path, this.encoding);
        const Write = this.fs.createWriteStream('Copy' + path);
        const WriteGz = this.fs.createWriteStream('Copy' + path + '.gz');
        let currData = this.getCurrData();

        Read.pipe(Write, { end: false });

        Read.on('end', () => {
            let res = this.getCurrData();
            Write.write(`\r\n Скопировано специально для Николая Лотоцкого ${res}`);
            Write.end(`\r\n Оригинальный файл ${path}`);
            const ReadCopy = this.fs.createReadStream('Copy' + path);
            ReadCopy.pipe(this.gzip.createGzip(this.options)).pipe(WriteGz);
            this.fs.unlinkSync('Copy' + path);
        });
    }
};
