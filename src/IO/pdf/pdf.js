
import pdf from "html-pdf"


function htmlText(){

        return `    
            <h1 style="color: red">Agora sim meu texto formatado em h1</h1>
            <hr>
            <p> Esse pdf tem muito conteúdo</p>
            <img src="file:///C:/dev/workspaceMateus/node/src/IO/pdf/jpeg444.jpg" />
            <img src="file:///C:/dev/workspaceMateus/node/src/IO/pdf/test.png" />
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