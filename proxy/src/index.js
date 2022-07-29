import express from "express";

import request from "request";

const server = express();

server.get("/*", (req, res) => {

    if (req.url.startsWith('/random-image')) {
        // proxy random image from picsum website
        const imageUrl = 'https://picsum.photos/300';
        req.pipe(request(imageUrl))
           .pipe(res);

    } else {

        console.log("default image");
        // default page with image tag that renders random image
        res.setHeader('Content-type', 'text/html');
        res.write(`<img src="/random-image/${Math.random()}" />`);
        res.end();
    }
});


server.listen(3000, ()=>{

    console.log("started");
});
