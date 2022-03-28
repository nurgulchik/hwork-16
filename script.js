function products() {
    fetch("products.json")
        .then((res) => {
            return res.json();
        })
        .then((product) => {
            product.forEach((element) => {
                const productsInner = document.querySelector(".products__inner");
                const info = document.createElement("div");
                const divImg = document.createElement("div");
                const photo = document.createElement("img");
                const descr = document.createElement("div");
                const h2 = document.createElement("h2");
                const h3 = document.createElement("h3");
                const text = document.createElement("div");
                const p = document.createElement("p");

                productsInner.appendChild(info);
                info.className = ("container");
                info.appendChild(divImg);
                divImg.appendChild(photo);

                descr.className = ("div-1");
                divImg.appendChild(descr);

                h2.style.fontSize = "15px";
                h2.style.textAlign = "left"
                descr.appendChild(h2);

                h3.style.fontSize = "15px";
                descr.appendChild(h3);
                info.appendChild(text);
                text.appendChild(p);

                photo.src = element.img;
                h2.textContent = element.title;
                h3.textContent = element.price;
                p.textContent = element.desc;                     
         
            const btnAll = document.querySelector(".btn-all");
            const btnPhone = document.querySelector(".btn-phone");
            const btnLaptop = document.querySelector(".btn-laptop");
            const btnTv = document.querySelector(".btn-tv");           

            btnAll.addEventListener("click", () => {
                if (element.category === "") {
                  info.style.display = "none";
                } else {
                    info.style.display = "block";
                }
              });
      
              btnLaptop.addEventListener("click", () => {
                if (element.category === "laptops") {
                    info.style.display = "block";
                } else {
                    info.style.display = "none";
                }
              });
      
              btnPhone.addEventListener("click", () => {
                if (element.category === "smartphones") {
                    info.style.display = "block";
                } else {
                    info.style.display = "none";
                }
              });
      
              btnTv.addEventListener("click", () => {
                if (element.category === "tv") {
                    info.style.display = "block";
                } else {
                    info.style.display = "none";
                }
              });
           
            });

          });
       
        
}
products()





















 // btnLaptop.addEventListener("click", () => {
            //     if (e.category === "laptops") {
            //       card.style.display = "block";
            //     } else {
            //       card.style.display = "none";
            //     }
            //   });
            //   btnAll.addEventListener("click", () => {
            //     if (e.category === "") {
            //       info.style.display = "none";
            //     } else {
            //       card.style.display = "block";
            //     }
            //   });
            //   btnPhone.addEventListener("click", () => {
            //     if (e.category === "smartphones") {
            //       info.style.display = "block";
            //     } else {
            //       card.style.display = "none";
            //     }
            //   });
            //   btnTv.addEventListener("click", () => {
            //     if (e.category === "tv") {
            //       info.style.display = "block";
            //     } else {
            //       card.style.display = "none";
            //     }
            //   });