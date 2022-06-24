    // *
    document.body.setAttribute('style', `margin: 0; padding: 0;`)

    // variable declaration
    let colorObj = {
      colorCr: 'rgba(255, 254, 249, 1)',
      colorYl: 'rgba(237, 235, 178, 1)',
      colorBp: 'rgba(200, 181, 200, 1)',
      colorDp: 'rgba(128, 104, 173, 1)',
      colorGr: 'rgba(196, 196, 196, 1)'
    };
    let hun = 100;

    // get #root
    const root = document.getElementById('root');
    console.log(root);
    // root style
    root.setAttribute('style', `width: ${hun}vw; height: ${hun}vh; display: grid; grid-template-rows: 1fr 9fr; background: ${colorObj.colorBp}; color: ${colorObj.colorDp};`);

    // select root.children
    const closeCon = root.firstElementChild;
    const tagCon = root.lastElementChild;
    console.log(closeCon);
    console.log(tagCon);

    // closeCon style
    if(!closeCon.classList.contains('flex-center-center')){
      closeCon.classList.add('flex-center-center');
    }
    closeCon.style.justifyContent = 'flex-end';
    
    // select closeCon.children
    const closeItem = closeCon.children[0];
    console.log(closeItem);
    // closeItem style
    if(!closeItem.classList.contains('flex-center-center')){
      closeItem.classList.add('flex-center-center');
    }
    closeItem.setAttribute('style',`width: ${hun/10}vw; height: ${hun/10}vw; flex-direction: column;`);

    // closeItem.children style
    console.log(closeItem.children);
    for(let i = 0; i < closeItem.children.length; i++){
      closeItem.children[i].setAttribute('style',`width: ${hun/2}px; height: ${hun/50}px; list-style-type: none; background: ${colorObj.colorDp};`);
      // console.dir(closeItem.children[i].style);
    }
    closeItem.firstElementChild.style.transform = `rotate(${hun/10*4+5}deg)`;
    closeItem.lastElementChild.style.transform = `rotate(-${hun/10*4+5}deg)`;

    // tagCon style
    if(!tagCon.classList.contains('flex-center-center')){
      tagCon.classList.add('flex-center-center');
    }
    tagCon.style.flexDirection = 'column';
    tagCon.style.rowGap = `${hun/50}vw`;

    // tagCon.children
    console.log(tagCon.children);
    const tagItem = tagCon.children;
    for(let i = 1; i < tagItem.length; i++){
      tagItem[i].setAttribute('style',`width: ${hun/2}vw; height: ${hun/10}vw; background: ${colorObj.colorYl}; text-align: center; border-radius: ${hun/2}px;`);
    }
    tagItem[1].style.border = `${hun/50}px solid ${colorObj.colorDp}`;
    tagItem[2].style.width = `${hun/5}vw`;
    tagItem[2].style.height = `${hun/20}vw`;
    tagItem[2].style.background = `${colorObj.colorDp}`;
    tagItem[2].style.color = `${colorObj.colorYl}`;
    tagItem[2].style.paddingTop = `3vw`;
    tagItem[2].style.paddingBottom = `-10px`;
    tagItem[2].textContent = '작성완료!';
