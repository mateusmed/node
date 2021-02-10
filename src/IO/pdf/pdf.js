
import pdf from "html-pdf"


function htmlTextOld(){

        return `
            <h1 style="color: red">Agora sim meu texto formatado em h1</h1>
            <hr>
            <p> Esse pdf tem muito conteúdo</p>
            <img src="file:///C:/dev/workspaceMateus/node/src/IO/pdf/jpeg444.jpg" />
            <img src="file:///C:/dev/workspaceMateus/node/src/IO/pdf/test.png" />
        `
}


function htmlText(){

    return `

            <!doctype html>
            <html lang="en">
            <head>
                <!-- Required meta tags -->
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                <!-- Bootstrap CSS -->
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"
                      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                      crossorigin="anonymous">
            
            
                <link href="custom.css" rel="stylesheet">
            
                <title>Hello, world!</title>
            </head>
            <body>
            
            <div class="container">
                <div class="row">
                    <div class="col-xs-6">
                        <div class="card" style="width: 15rem;">
                            <img class="card-img-top" src="#" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-6">
            
                        <div class="card" style="width: 15rem;">
                            <img class="card-img-top" src="#" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-6">
                        <div class="card" style="width: 15rem;">
                            <img class="card-img-top" src="#" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Optional JavaScript -->
            <!-- jQuery first, then Popper.js, then Bootstrap JS -->
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                    crossorigin="anonymous"></script>
            
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                    crossorigin="anonymous"></script>
            
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                    crossorigin="anonymous"></script>
            </body>


        </html>
           
        `
}



function myFunction(){

    let htmlContent = htmlText();

    pdf.create(htmlContent, {})
        .toFile("./meuPDF.pdf", (err, res) => {

            if(err){
                console.log(err);
            }else{
                console.log("gareted")
            }
    })
}


myFunction();