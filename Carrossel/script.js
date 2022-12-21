document.addEventListener('DOMContentLoaded',function(){
    let list = [];
    const button = document.querySelector(".button-submit");
    const items = document.querySelector(".form-result");
    let inputFile = document.querySelector(".input-imagem");
    let pictureImage = document.querySelector(".picture-image");
    let newImage;
    let largura = window.screen.width;

    inputFile.addEventListener('change', function(e){
        const inputTarget = e.target;
        const file = inputTarget.files[0];
        if(file){
            const reader = new FileReader();
            reader.addEventListener('load', function(e){
                const readerTarget = e.target;

                const img = document.createElement('img');
                img.src = readerTarget.result;
                img.classList.add('picture-img');

                pictureImage.innerHTML = '';
                pictureImage.appendChild(img);
                newImage = readerTarget.result;
            });
            reader.readAsDataURL(file);
        }
    });

    function resetItems(){
        const resetador = "";
        document.querySelector(".input-title").value = resetador;
        document.querySelector(".input-descricao").value = resetador;
        pictureImage.innerHTML = "Imagem";
        inputFile.value = "";
    }

        function addItemToList(event){
            event.preventDefault();

            const title = document.querySelector(".input-title").value;
            let description = document.querySelector(".input-descricao").value;
            //let image = event.target["input-imagem"].value;
            if(title != "" && description != ""){
                const item = {
                    titulo: title ,
                    descricao: description,
                    imagem: newImage,
                };
                list.push(item);
            }

            renderListItems();
        }
            function renderListItems(){
                let itemStructure = `<li class="item-list" data-test="item-list">
                                        <img data-test="image-item-list" src="./assets/images/imagem01.png">
                                        <h2 data-test="title-item-list">Pão de Açucar</h2>
                                        <p data-test="description-item-list">Amet minim mollit non deserunt ullamco
                                        est sit aliqua dolor dosa amet sint. Velit
                                        officia consece duis enim velit mollit.</p>
                                    </li>
                                    <li class="item-list" data-test="item-list">
                                        <img data-test="image-item-list" src="./assets/images/imagem02.png">
                                        <h2 data-test="title-item-list">Cristo Redentor</h2>
                                        <p data-test="description-item-list">Amet minim mollit non deserunt ullamco
                                        est sit aliqua dolor dosa amet sint. Velit
                                        officia consece duis enim velit mollit.</p>
                                    </li>
                                    <li class="item-list" data-test="item-list">
                                        <img data-test="image-item-list" src="./assets/images/imagem03.png">
                                        <h2 data-test="title-item-list">ilha Grande</h2>
                                        <p data-test="description-item-list">Amet minim mollit non deserunt ullamco
                                        est sit aliqua dolor dosa amet sint. Velit
                                        officia consece duis enim velit mollit.</p>
                                    </li>
                                    <li class="item-list" data-test="item-list">
                                        <img data-test="image-item-list" src="./assets/images/imagem04.png">
                                        <h2 data-test="title-item-list">Centro Histórico de Paraty</h2>
                                        <p data-test="description-item-list">Amet minim mollit non deserunt ullamco
                                        est sit aliqua dolor dosa amet sint. Velit
                                        officia consece duis enim velit mollit.</p>
                                    </li>`;
                list.forEach(function (item){
                    itemStructure += `
                    <li class="item-list" data-test="item-list">
                        <img data-test="image-item-list" src="${item.imagem}"/>
                        <h2 data-test="title-item-list">${item.titulo}</h2>
                        <p data-test="description-item-list">${item.descricao}</p>
                    </li>`
                });
                items.innerHTML = itemStructure;
                if(largura > 1024){
                    $(".form-result").slick({
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        dots: true,
                        infinite:true,
                        //autoplay: true,
                        //autoplaySpeed: 2000,
                        //dots: true,
                });
            }
            }
            function addItemToList(event){
                event.preventDefault();

                const title = document.querySelector(".input-title").value;
                let description = document.querySelector(".input-descricao").value;
                //let image = event.target["input-imagem"].value;
                if(title != "" && description != ""){
                    const item = {
                        titulo: title ,
                        descricao: description,
                        imagem: newImage,
                    };
                    list.push(item);
                }
                if (largura > 1024){
                    $(".form-result").slick('unslick');
                }
                renderListItems();
            }
    renderListItems();
    button.addEventListener("click",addItemToList);
    button.addEventListener("click", resetItems);
});

