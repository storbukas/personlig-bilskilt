import fs = require('fs');
import { FargeKode, settFarger } from './fargekoder';

export const genererBilskilt = (res: any, kjennemerke: string, fargeKode: FargeKode) => {
    fs.readFile('media/personlig-bilskilt.svg', 'utf-8', function (err, data) {
        if (err) {
            res.send("An error occurred.");
        } else {
            // set the content type based on the file
            res.setHeader('Content-Type', 'image/svg+xml');

            if (kjennemerke) {
                if (kjennemerke.length > 7) {
                    kjennemerke = kjennemerke.substring(0, 7);
                }

                res.send(settFarger(data, fargeKode).replace('GEEK', kjennemerke.toUpperCase()));
            } else {
                res.send(settFarger(data, fargeKode));
            }
        }
        res.end();
    });
}