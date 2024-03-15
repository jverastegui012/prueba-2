'use strict'
const GI = {
	createElement (tag, atributes) {
		let element = document
        var ul=document.createElement('ol');
        for (let index = 0; index < to_do.length; index++) {
            const text = to_do[index];
            var li=document.createElement('li');
            var input=document.createElement('input');
            var label=document.createElement('label');
            var id='chk' + index;
            input.id=id;
            input.type="checkbox";
            input.onclick = function(ele){
                //ele.atributes['style']="text-decoration: line-through; color: gray;";
                if(ele.target.checked){
                    ele.target.labels[0].setAttribute('style','text-decoration: line-through; color: gray')
                }else{
                    ele.target.labels[0].setAttribute('style','')
                }

            };
            input.innerText=text;
            label.innerText=text;
            label.htmlFor=id;
            li.appendChild(input);
            li.appendChild(label);
            ul.appendChild(li);

        }
        document.querySelector("#lista").appendChild(ul);
		return document.createElement(tag)
	}
}

document.onload=function(){
 GI.createElement();

};


const to_do = [
    'Alimentar al perro',
    'Estudiar para prueba escrita',
    'Pagar taxes',
    'Pasear a perro',
    'Comprar entradas para el cine',
]

GI.createElement();