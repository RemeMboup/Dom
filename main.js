
       
        let i=0;
        var article = document.querySelectorAll(".article");
        var quantite = document.querySelectorAll('.produitNomber');
        var bnt_add = document.querySelectorAll('.bnt_add');
        for(i=0 ; i<article.length; i++){
            var bnt_add = document.querySelectorAll('.bnt_add');
            console.log('le nombre de clicks');
            
            console.log(bnt_add[i]);
            // fonction incrementation
            (function(index){
                console.log('le nombre de clicks');
            
                console.log(bnt_add[i]);

                bnt_add[i].addEventListener("click", function() {
                console.log(index);
                var pdtNomber = document.querySelectorAll(".produitNomber")
                console.log(pdtNomber);
                //for(let k=0; k<pdtNomber.length; k++){
                console.log("le produit");
                
                console.log(pdtNomber[index]);
                
                var pdt = pdtNomber[index];
                console.log("on recupere le premier nombre");
                // console.log(pdt.innerHTML);
                
                
                var number = pdt.innerHTML
                number++;

                console.log("Numero apre incrementation");
                
                console.log(number);
                
                pdt.innerHTML = number;

                console.log(pdt);
                var prix = document.querySelectorAll(".prix");
                console.log("affiche moi le prix");
                console.log(prix);
                var lePrix = prix[index];
                var lePrixUnitaire = lePrix.innerHTML;
                console.log("le prix unitaire");
                console.log(lePrixUnitaire);
                var prix_unitaire = lePrixUnitaire.match(/\d+/g);
                console.log("mon prix");
                
                console.log(prix_unitaire);
                
                var total = document.querySelectorAll(".prix_total");
                var laSomme = total[index];
                
                console.log(number);
                
                var sum = number * prix_unitaire;
                var sousTotal = sum+"Fcfa";
                console.log("la somme");
                console.log(sum);
                // la est un valeur de doit se metre a jour apre chaque modifation de quantite saisi
                laSomme.innerHTML = sousTotal;

                // on calcule le total
                var totalSomme = document.querySelector(".Letotal");
                console.log("totalSomme");
                console.log(totalSomme);
                
                
                var sums = totalSomme.innerHTML;
                console.log("a additionner");
                
                console.log(sums);
                
                //console.log(sums.innerHTML);
                
                var somTotal = sums.match(/\d+/g);
                //console.log(somTotal);
                var leSousTotal = sousTotal.match(/\d+/g);

                var sommeDesDeux = somTotal + leSousTotal+"Fcfa";
                console.log("somme des deux");
                
                console.log(sommeDesDeux);
                
                var laSommeTotal = sommeDesDeux+"Fcfa";
                console.log("LaSommeTotal");
                
                console.log(laSommeTotal);
                
                
                console.log("Ma somme");
                
               
                totalSomme.innerHTML = laSommeTotal;
                console.log(totalSomme);
                
                // gestion du bouton aimer
                btn_aimer = document.querySelectorAll('.btn_aimer');
                console.log("mon bouton aimer");
                console.log(btn_aimer);
                console.log(btn_aimer[i]);
                btn_index = btn_aimer[index];
                console.log("btn index");
                console.log(btn_index);
                btn_aimer[index].addEventListener('click', function onClick() {
                btn_aimer[index].style.backgroundColor = 'white';
                btn_aimer[index].style.color = 'red';
                });
                //action d ajout du produit sur notre panier
                var nom_produit = document.querySelectorAll(".nom_produit")
                console.log('LES PRODUITS');
                
                console.log(nom_produit);
                
                var indexProduit = nom_produit[index];
                console.log("index du produit");
                
                console.log(indexProduit);
                
                var nomProduit = indexProduit.innerHTML;
                console.log(nomProduit);
                
                var add_panier = document.querySelectorAll(".btn_add_panier")
                console.log("les boutons d'ajout de panier");
                console.log(add_panier);
                //alert("La valeur existe!")
                btn_add_panier[index].addEventListener("click",function add_panier(){
                    let articleChoisi = {
                    "NomProduit":nomProduit,
                    "Prix":lePrixUnitaire,
                    "Quantite":number,
                    "SousTotal":sousTotal
                }
                console.log(articleChoisi);
                
                var articlee = Array();
                articlee.push(articleChoisi)
                console.log("mes mes article")
                console.log("article -1");
                console.log(articlee[0]);
                var element = document.getElementById("table");
                console.log("ceci est mon dernier element");
                element.innerHTML =  element.innerHTML+`<tbody><tr><td>${articlee[0].NomProduit}</th><td>${articlee[0].Prix}</td><td>${articlee[0].Quantite}</td><td>${articlee[0].SousTotal}</td><td><button>Supprimer</button><td></tr> </tbody>`;
                
                console.log(element);
            });
            var btn_remove =  document.createElement("button");
            console.log("Mon bouton");
            console.log(bnt_remove);
            console.log('mon index');
            console.log(bnt_remove[index]);
            btn_remove.innerText = "Supprimer";
                (function(index){
                    btn_remove.addEventListener("click", function() {
                        console.log(index)
                        bnt_remove[index].parentElement.remove();

                    
                    })(i);
                    var buttonsContainer = document.querySelectorAll(".table")
                    buttonsContainer[index].appendChild(btn_remove);
                    console.log("on doit supprimer");
                    
                    console.log(i);
                    document.body.appendChild(buttonsContainer)

                    
                });
                })
                console.log(index);
                
            })(i)
            //la decrementation
            var bnt_remove = document.querySelectorAll('.bnt_remove');
            console.log(bnt_remove[0]);

            (function(index){
                bnt_remove[i].addEventListener("click", function() {
                console.log(index);
                var pdtNomber = document.querySelectorAll(".produitNomber")
                console.log(pdtNomber);
                console.log("le produit");
                
                console.log(pdtNomber[index]);
                
                var pdt = pdtNomber[index];
                console.log("on recupere le premier nombre");
                var number = pdt.innerHTML
                number--;
                if(number >=0 ){
                    console.log("Numero apre incrementation");
                
                    console.log(number);
                    
                    pdt.innerHTML = number;
                    console.log(pdt);
                    var prix = document.querySelectorAll(".prix");
                    console.log("affiche moi le prix");
                    
                    console.log(prix);
                    var lePrix = prix[index];
                    var lePrixUnitaire = lePrix.innerHTML;
                    console.log("le prix unitaire");
                    console.log(lePrixUnitaire);
                    var prix_unitaire = lePrixUnitaire.match(/\d+/g);
                    console.log(prix_unitaire);
                    var total = document.querySelectorAll(".prix_total");
                    var laSomme = total[index];
                    console.log("nombre saisi");
                    
                    console.log(number);
                    
                    var sum = number * prix_unitaire;
                    var sousTotal = sum+"Fcfa";
                    console.log("la somme");
                    console.log(sum);
                    laSomme.innerHTML = sousTotal;
                    //action d ajout du produit sur notre panier au cas ou on decremente
                    var nom_produit = document.querySelectorAll(".nom_produit")
                    console.log('LES PRODUITS');
                    console.log(nom_produit);
                    var indexProduit = nom_produit[index];
                    console.log("index du produit");
                    console.log(indexProduit);
                    var nomProduit = indexProduit.innerHTML;
                    console.log(nomProduit);
                    if(number == 0 ){
                        alert("Veuillez saisir une quantite superieur a 0")
                    }
                    else{
                        var add_panier = document.querySelectorAll(".btn_add_panier")
                        console.log("les boutons d'ajout de panier");
                        console.log(add_panier);
                        btn_add_panier[index].addEventListener("click",function add_panier(){
                                
                        var element = document.getElementById("table");
                        console.log("ce que contient notre table");
                        
                        console.log(element.innerHTML);
                        element.innerHTML = element.innerHTML+`<tbody><tr><td>${nomProduit}</th><td>${prix_unitaire}</td><td>${number}</td><td>${sousTotal}</td></tr> </tbody>`;
                        document.body.appendChild(element)
                        console.log(element);
                            
                        var btn_remove =  document.createElement("button");
                        console.log("Mon bouton");
                        console.log(bnt_remove);
                        console.log('mon index');
                        console.log(bnt_remove[index]);
                        btn_remove.innerText = "Supprimer";
                            (function(index){
                                btn_remove.addEventListener("click", function() {
                                    console.log(index)
                                    bnt_remove[index].parentElement.remove();
                                })(i)
                                var buttonsContainer = document.querySelectorAll(".table")
                                buttonsContainer[index].appendChild(btn_remove);
                                console.log("on doit supprimer");
                                
                                console.log(i);
                                document.body.appendChild(buttonsContainer)  
                });
                    });
                    }
                }
                
                });
                console.log("on calcule la somme");

                //somTotal(index);
                //som(1,9);
                console.log("la somme deja calcule");
                
            })(i)// fin de la fonction
        }