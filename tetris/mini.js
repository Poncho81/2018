const _0xc5b23e={'TILE':0x1b,'TX':0xc,'TY':0x16,'WIDTH':0x1b*0xc,'HEIGHT':0x1b*0x16,'SCALE':0x1,'TWO_PI':Math['PI']*0x2,'NXT_S':0x8,'GAME':0x65,'MENU':0x66,'GAMEOVER':0x67,'PRESSED':0x1,'RELEASED':0x2};const _0x35bbf3={'MARK':0x0,'GRID':0x1,'BLUE':0x2,'GREEN':0x3,'YELLOW':0x4,'LILA':0x5,'ORANGE':0x6,'RED':0x7,'CYAN':0x8,'GREY':0x9,'FLASH':0xa};const _0x25530b={'PLAYING':0x1,'EXPLODING':0x2,'FALLING':0x3,'OVER':0x4,'PAUSE':0x5};function _0x38cd76(_0x1313c6){return new Promise((_0xcb64fc,_0x17c4e1)=>{const _0xb35a09=new Image();_0xb35a09['onload']=()=>_0xcb64fc(_0xb35a09);_0xb35a09['src']=_0x1313c6;});}function _0x13441a(_0x18409d,_0x3677c2){const _0x3c3488=_0x3677c2-_0x18409d;return Math['floor'](Math['random']()*_0x3c3488+_0x18409d);}function _0x49b8f4(_0x47d308,_0x27f91e){_0x1da678(_0x47d308)['then'](_0x7d4a17=>_0x27f91e(_0x7d4a17));}async function _0x1da678(_0x3ff4b6){const _0x412889=await fetch(_0x3ff4b6);const _0xf81df7=await _0x412889['arrayBuffer']();return new Uint8Array(_0xf81df7);}function _0x4dbf04(_0x2dee74,_0x5dc6e4,_0x4b7ab3){return Math['min'](Math['max'](_0x2dee74,_0x5dc6e4),_0x4b7ab3);}function _0xd34a15(_0x2b4bf0,_0x3c0fab,_0x4d9c9f=!![]){let _0x36d6ad;const _0x53906e=document['createElement']('canvas');if(_0x4d9c9f){_0x36d6ad=_0x2b4bf0['width'];_0x53906e['width']=_0x36d6ad*_0x3c0fab;_0x53906e['height']=_0x2b4bf0['height'];}else{_0x36d6ad=_0x2b4bf0['height'];_0x53906e['width']=_0x2b4bf0['width'];_0x53906e['height']=_0x36d6ad*_0x3c0fab;}const _0x2e227e=_0x53906e['getContext']('2d');if(_0x4d9c9f){for(let _0x2ce8cb=0x0;_0x2ce8cb<_0x53906e['width'];_0x2ce8cb+=_0x36d6ad){_0x2e227e['drawImage'](_0x2b4bf0,_0x2ce8cb,0x0);}}else{for(let _0x504dde=0x0;_0x504dde<_0x53906e['height'];_0x504dde+=_0x36d6ad){_0x2e227e['drawImage'](_0x2b4bf0,0x0,_0x504dde);}}const _0x7b931e=new Image();_0x7b931e['src']=_0x53906e['toDataURL']();return _0x7b931e;}function _0xa7d0e1(_0x545ddc,_0x335119=!![]){const _0x251d47=document['createElement']('canvas');_0x251d47['width']=_0x545ddc['width'];_0x251d47['height']=_0x545ddc['height'];const _0x557c9d=_0x251d47['getContext']('2d');if(_0x335119){_0x557c9d['translate'](_0x251d47['width'],0x0);_0x557c9d['scale'](-0x1,0x1);}else{_0x557c9d['translate'](0x0,_0x251d47['height']);_0x557c9d['scale'](0x1,-0x1);}_0x557c9d['drawImage'](_0x545ddc,0x0,0x0);const _0x1068be=new Image();_0x1068be['src']=_0x251d47['toDataURL']();return _0x1068be;}class _0x2f8724{constructor(){}['update'](_0x401093){}['draw'](_0x2bd920){}['input'](_0x478fdf){}['start'](){}['stats'](_0x1bf538){}}class _0x42ad5d{constructor(_0x5ca636){this['images']=new Array(0x23);Promise['all']([_0x38cd76('./img/mark.gif')['then'](_0x1c3dd5=>{this['images'][_0x35bbf3['MARK']]=_0x1c3dd5;}),_0x38cd76('./img/grid.gif')['then'](_0x280b33=>{this['images'][_0x35bbf3['GRID']]=_0x280b33;}),_0x38cd76('./img/1.gif')['then'](_0x590979=>{this['images'][_0x35bbf3['BLUE']]=_0x590979;}),_0x38cd76('./img/2.gif')['then'](_0x4041c1=>{this['images'][_0x35bbf3['GREEN']]=_0x4041c1;}),_0x38cd76('./img/3.gif')['then'](_0x115555=>{this['images'][_0x35bbf3['YELLOW']]=_0x115555;}),_0x38cd76('./img/4.gif')['then'](_0x3068a9=>{this['images'][_0x35bbf3['LILA']]=_0x3068a9;}),_0x38cd76('./img/5.gif')['then'](_0x11a5f9=>{this['images'][_0x35bbf3['ORANGE']]=_0x11a5f9;}),_0x38cd76('./img/6.gif')['then'](_0x208de4=>{this['images'][_0x35bbf3['RED']]=_0x208de4;}),_0x38cd76('./img/7.gif')['then'](_0x3e5954=>{this['images'][_0x35bbf3['CYAN']]=_0x3e5954;}),_0x38cd76('./img/8.gif')['then'](_0x2f2ef0=>{this['images'][_0x35bbf3['GREY']]=_0x2f2ef0;}),_0x38cd76('./img/9.gif')['then'](_0x39db45=>{this['images'][_0x35bbf3['FLASH']]=_0x39db45;})])['then'](()=>{_0x5ca636();});}['image'](_0x22ade6){if(_0x22ade6<this['images']['length']){return this['images'][_0x22ade6];}return null;}}class _0xbe7cb9{constructor(){this['keyState']=new Map();this['keyAction']=new Map();window['addEventListener']('keydown',_0xf6a43e=>this['action'](_0xf6a43e));window['addEventListener']('keyup',_0x34ff3e=>this['action'](_0x34ff3e));this['addKey']=(_0x1e85a0,_0x2ad072)=>{this['keyAction']['set'](_0x1e85a0,_0x2ad072);this['keyState']['set'](_0x1e85a0,_0xc5b23e['RELEASED']);};}['action'](_0x32cf5d){if(!this['keyState']['has'](_0x32cf5d['keyCode']))return;_0x32cf5d['preventDefault']();const _0x55590d=_0x32cf5d['type']==='keydown'?_0xc5b23e['PRESSED']:_0xc5b23e['RELEASED'];if(this['keyState']['get'](_0x32cf5d['keyCode'])!==_0x55590d){this['keyState']['set'](_0x32cf5d['keyCode'],_0x55590d);this['keyAction']['get'](_0x32cf5d['keyCode'])(_0x55590d);}}['clear'](){this['keyState']['clear']();this['keyAction']['clear']();}}class _0x2ec9cc extends _0x2f8724{constructor(){super();this['pentominos']=[[0x0,0x1,0x0,0x0,0x0,0x1,0x0,0x0,0x0,0x1,0x0,0x0,0x0,0x1,0x0,0x0],[0x0,0x0,0x1,0x1,0x1,0x1,0x0,0x0,0x0],[0x1,0x0,0x0,0x1,0x1,0x1,0x0,0x0,0x0],[0x0,0x1,0x1,0x1,0x1,0x0,0x0,0x0,0x0],[0x1,0x1,0x0,0x0,0x1,0x1,0x0,0x0,0x0],[0x0,0x1,0x0,0x1,0x1,0x1,0x0,0x0,0x0],[0x1,0x1,0x0,0x1,0x1,0x0,0x0,0x0,0x0]];this['bag']=[];this['board']=[];this['lines']=[];this['explodeTime']=this['py']=this['dropTime']=this['rotation']=this['score']=this['lineCounter']=0x0;this['nextPiece']=0x0;this['px']=0x4;this['speed']=this['level']=0x1;this['nxLvl']=0x0;this['gameState']=this['oldState']=_0x25530b['PLAYING'];this['spanS']=document['getElementById']('score');this['spanL']=document['getElementById']('lines');this['spanV']=document['getElementById']('level');this['canvas']=document['createElement']('canvas');this['canvas']['id']='next';this['canvas']['height']=this['canvas']['width']=_0xc5b23e['NXT_S']*_0xc5b23e['TILE']*_0xc5b23e['SCALE'];document['body']['appendChild'](this['canvas']);this['ctx']=this['canvas']['getContext']('2d');this['ctx']['scale'](_0xc5b23e['SCALE'],_0xc5b23e['SCALE']);for(let _0x35cc9c=0x0;_0x35cc9c<_0xc5b23e['TY'];_0x35cc9c++){this['board'][_0x35cc9c]=[];for(let _0x38410a=0x0;_0x38410a<_0xc5b23e['TX'];_0x38410a++){if(_0x38410a==0x0||_0x38410a==_0xc5b23e['TX']-0x1||_0x35cc9c==_0xc5b23e['TY']-0x1)this['board'][_0x35cc9c][_0x38410a]=0x8;else this['board'][_0x35cc9c][_0x38410a]=0x0;}}_0x17c211['clear']();_0x17c211['addKey'](0x20,_0x242bcb=>{if(_0x242bcb===_0xc5b23e['PRESSED']){this['input'](0x5);}});_0x17c211['addKey'](0x25,_0x31b572=>{if(_0x31b572===_0xc5b23e['PRESSED']){this['input'](0x3);}});_0x17c211['addKey'](0x26,_0x741dac=>{if(_0x741dac===_0xc5b23e['PRESSED']){this['input'](0x1);}});_0x17c211['addKey'](0x27,_0x2da65a=>{if(_0x2da65a===_0xc5b23e['PRESSED']){this['input'](0x4);}});_0x17c211['addKey'](0x28,_0x463ab1=>{if(_0x463ab1===_0xc5b23e['PRESSED']){this['input'](0x2);}});_0x17c211['addKey'](0x50,_0x47986f=>{if(_0x47986f===_0xc5b23e['PRESSED']){this['input'](0x6);}});_0x17c211['addKey'](0x52,_0x1e38da=>{if(_0x1e38da===_0xc5b23e['PRESSED']){this['input'](0x7);}});this['getCurrent']();}['restart'](){for(let _0x424284=0x1;_0x424284<_0xc5b23e['TY']-0x1;_0x424284++){for(let _0x5d794a=0x1;_0x5d794a<_0xc5b23e['TX']-0x1;_0x5d794a++){this['board'][_0x424284][_0x5d794a]=0x0;}}this['speed']=this['level']=0x1;this['score']=this['lineCounter']=this['nxLvl']=0x0;this['gameState']=this['oldState']=_0x25530b['PLAYING'];this['fillBag']();this['getCurrent']();}['setupBtns'](){document['getElementById']('up')['addEventListener']('click',()=>{this['input'](0x1);});document['getElementById']('left')['addEventListener']('click',()=>{this['input'](0x3);});document['getElementById']('right')['addEventListener']('click',()=>{this['input'](0x4);});document['getElementById']('down')['addEventListener']('click',()=>{this['input'](0x2);});document['getElementById']('space')['addEventListener']('click',()=>{this['input'](0x5);});document['getElementById']('pause')['addEventListener']('click',()=>{this['input'](0x6);});}['getCurrent'](){if(this['bag']['length']<0x1)this['fillBag']();this['current']=this['bag']['shift']();if(this['bag']['length']<0x1)this['fillBag']();this['nextPiece']=this['bag'][0x0];this['px']=0x4;this['py']=0x0;this['rotation']=0x0;}['fillBag'](){this['bag']=[0x0,0x1,0x2,0x3,0x4,0x5,0x6];for(let _0x3da7b1=0x0;_0x3da7b1<0x3;_0x3da7b1++){for(let _0x41032e=0x6;_0x41032e>-0x1;_0x41032e--){let _0x19bce0=Math['floor'](Math['random']()*_0x41032e);let _0x4f2e5d=this['bag'][_0x41032e];this['bag'][_0x41032e]=this['bag'][_0x19bce0];this['bag'][_0x19bce0]=_0x4f2e5d;}}}['canMove'](_0x3d4387,_0x5ade7b){let _0x2d5acf=this['current']===0x0?0x4:0x3;for(let _0xa4fac9=0x0;_0xa4fac9<_0x2d5acf;_0xa4fac9++){let _0x2f374f=this['py']+_0x5ade7b+_0xa4fac9;for(let _0xf755e2=0x0;_0xf755e2<_0x2d5acf;_0xf755e2++){let _0x392b00=this['px']+_0x3d4387+_0xf755e2;if(this['getPiece'](_0xf755e2,_0xa4fac9)&&this['board'][_0x2f374f][_0x392b00]!==0x0)return![];}}return!![];}['drop'](){if(this['canMove'](0x0,0x1)){this['py']++;this['dropTime']=0x0;return!![];}return![];}['getPiece'](_0xb05d8c,_0x4068bc){let _0x3f5fc1=0x3,_0x20c23f=0x6,_0x5dc1f9=0x8,_0x248bdb=0x2;switch(this['current']){case 0x6:this['rotation']=0x0;break;case 0x0:_0x3f5fc1=0x4;_0x20c23f=0xc;_0x5dc1f9=0xf;_0x248bdb=0x3;break;}switch(this['rotation']){case 0x0:return this['pentominos'][this['current']][_0xb05d8c+_0x3f5fc1*_0x4068bc];case 0x1:return this['pentominos'][this['current']][_0x20c23f+_0x4068bc-_0x3f5fc1*_0xb05d8c];case 0x2:return this['pentominos'][this['current']][_0x5dc1f9-_0x3f5fc1*_0x4068bc-_0xb05d8c];case 0x3:return this['pentominos'][this['current']][_0x248bdb+_0x3f5fc1*_0xb05d8c-_0x4068bc];}return 0x0;}['newPiece'](){let _0x30c29a=this['current']===0x0?0x4:0x3;for(let _0x45e474=0x0;_0x45e474<_0x30c29a;_0x45e474++){for(let _0x1de5b3=0x0;_0x1de5b3<_0x30c29a;_0x1de5b3++){if(this['getPiece'](_0x1de5b3,_0x45e474)){this['board'][this['py']+_0x45e474][this['px']+_0x1de5b3]=this['current']+0x1;}}}this['lines']=[];let _0xe3bfb0;for(let _0x5d327a=this['py'];_0x5d327a<_0xc5b23e['TY']-0x1;_0x5d327a++){_0xe3bfb0=!![];for(let _0x4a6ba8=0x1;_0x4a6ba8<_0xc5b23e['TX']-0x1;_0x4a6ba8++){if(this['board'][_0x5d327a][_0x4a6ba8]<0x1){_0xe3bfb0=![];break;}}if(_0xe3bfb0)this['lines']['push'](_0x5d327a);}if(this['lines']['length']>0x0){this['lines']['forEach'](_0x4f1ccd=>{for(let _0x1b4cad=0x1;_0x1b4cad<_0xc5b23e['TX']-0x1;_0x1b4cad++){this['board'][_0x4f1ccd][_0x1b4cad]=_0x35bbf3['FLASH']-0x1;}});this['gameState']=_0x25530b['EXPLODING'];}this['getCurrent']();if(!this['canMove'](0x0,0x1))this['gameState']=_0x25530b['OVER'];}['input'](_0x4700b5){if(_0x4700b5!==0x7&&this['gameState']===_0x25530b['OVER'])return;switch(_0x4700b5){case 0x1:let _0x218d9e=this['rotation'];this['rotation']=(this['rotation']+0x1)%0x4;if(!this['canMove'](0x0,0x0))this['rotation']=_0x218d9e;break;case 0x2:if(!this['drop']()){newPiece();}break;case 0x3:if(this['canMove'](-0x1,0x0))this['px']--;break;case 0x4:if(this['canMove'](0x1,0x0))this['px']++;break;case 0x5:this['gameState']=_0x25530b['FALLING'];break;case 0x6:if(this['gameState']===_0x25530b['PAUSE']){this['gameState']=this['oldState'];}else{this['oldState']=this['gameState'];this['gameState']=_0x25530b['PAUSE'];}break;case 0x7:this['restart']();break;}}['update'](_0x3a8734){switch(this['gameState']){case _0x25530b['PAUSE']:break;case _0x25530b['PLAYING']:this['dropTime']+=_0x3a8734;if(this['dropTime']>this['speed']){if(!this['drop']()){this['newPiece']();}}break;case _0x25530b['EXPLODING']:if((this['explodeTime']+=_0x3a8734)>0.15){this['explodeTime']=0x0;this['gameState']=_0x25530b['PLAYING'];this['lines']['forEach'](_0x125286=>{for(let _0x223992=0x1;_0x223992<_0xc5b23e['TX']-0x1;_0x223992++){for(let _0x83af1=_0x125286;_0x83af1>0x0;_0x83af1--){this['board'][_0x83af1][_0x223992]=this['board'][_0x83af1-0x1][_0x223992];}}});this['lineCounter']+=this['lines']['length'];this['nxLvl']+=this['lines']['length'];if(this['nxLvl']>0x14){this['nxLvl']-=0x14;this['level']++;this['speed']-=0.05;if(this['speed']<0.05)this['speed']=0.05;}this['score']+=this['lines']['length']*this['lines']['length']*0x64;this['spanS']['innerHTML']=this['score'];this['spanL']['innerHTML']=this['lineCounter'];this['spanV']['innerHTML']=this['level'];}break;case _0x25530b['FALLING']:if(!this['drop']()){this['gameState']=_0x25530b['PLAYING'];this['newPiece']();}break;case _0x25530b['OVER']:break;}}['draw'](_0x4c4a4e){for(let _0xc80c6d=0x0;_0xc80c6d<_0xc5b23e['TY'];_0xc80c6d++){for(let _0x5d8299=0x0;_0x5d8299<_0xc5b23e['TX'];_0x5d8299++){_0x4c4a4e['drawImage'](_0x1d51a2['images'][_0x35bbf3['GRID']+this['board'][_0xc80c6d][_0x5d8299]],_0x5d8299*0x1b,_0xc80c6d*0x1b);}}let _0x113540=this['py'];while(this['canMove'](0x0,0x1)){this['py']++;}let _0x2a811f=this['py'];this['py']=_0x113540;_0x113540=this['current']===0x0?0x4:0x3;let _0x15b607=this['px']*_0xc5b23e['TILE'],_0x31d894=_0x2a811f*_0xc5b23e['TILE'];for(let _0x2dceba=0x0;_0x2dceba<_0x113540;_0x2dceba++){for(let _0x2a9149=0x0;_0x2a9149<_0x113540;_0x2a9149++){if(this['getPiece'](_0x2a9149,_0x2dceba)){_0x4c4a4e['drawImage'](_0x1d51a2['images'][_0x35bbf3['MARK']],_0x2a9149*_0xc5b23e['TILE']+_0x15b607,_0x2dceba*_0xc5b23e['TILE']+_0x31d894);}}}_0x15b607=this['px']*_0xc5b23e['TILE'];_0x31d894=this['py']*_0xc5b23e['TILE'];for(let _0x2b4353=0x0;_0x2b4353<_0x113540;_0x2b4353++){for(let _0x2a9149=0x0;_0x2a9149<_0x113540;_0x2a9149++){if(this['getPiece'](_0x2a9149,_0x2b4353)){_0x4c4a4e['drawImage'](_0x1d51a2['images'][_0x35bbf3['BLUE']+this['current']],_0x2a9149*_0xc5b23e['TILE']+_0x15b607,_0x2b4353*_0xc5b23e['TILE']+_0x31d894);}}}for(let _0xc80c6d=0x0;_0xc80c6d<_0xc5b23e['NXT_S'];_0xc80c6d++){for(let _0x5d8299=0x0;_0x5d8299<_0xc5b23e['NXT_S']-0x1;_0x5d8299++){let _0x473d12=_0x5d8299===0x0||_0x5d8299===_0xc5b23e['NXT_S']-0x2||_0xc80c6d===0x0||_0xc80c6d===_0xc5b23e['NXT_S']-0x1?_0x35bbf3['GREY']:_0x35bbf3['GRID'];this['ctx']['drawImage'](_0x1d51a2['images'][_0x473d12],_0x5d8299*0x1b,_0xc80c6d*0x1b);}}let _0x33bff9=0x2*_0xc5b23e['TILE'];_0x113540=this['nextPiece']===0x0?0x4:0x3;for(let _0x270efb=0x0;_0x270efb<_0x113540;_0x270efb++){for(let _0x2a9149=0x0;_0x2a9149<_0x113540;_0x2a9149++){if(this['pentominos'][this['nextPiece']][_0x2a9149+_0x113540*_0x270efb]){this['ctx']['drawImage'](_0x1d51a2['images'][_0x35bbf3['BLUE']+this['nextPiece']],_0x2a9149*_0xc5b23e['TILE']+_0x33bff9,_0x270efb*_0xc5b23e['TILE']+_0x33bff9);}}}}}class _0x50c794{constructor(){this['canvas']=document['createElement']('canvas');this['canvas']['id']='main';this['canvas']['width']=_0xc5b23e['WIDTH']*_0xc5b23e['SCALE'];this['canvas']['height']=_0xc5b23e['HEIGHT']*_0xc5b23e['SCALE'];document['body']['appendChild'](this['canvas']);this['ctx']=this['canvas']['getContext']('2d');this['ctx']['scale'](_0xc5b23e['SCALE'],_0xc5b23e['SCALE']);this['lastTime']=0x0;this['accumulator']=0x0;this['deltaTime']=0x1/0x3c;this['loop']=_0x22a192=>{this['accumulator']+=(_0x22a192-this['lastTime'])/0x3e8;while(this['accumulator']>this['deltaTime']){this['accumulator']-=this['deltaTime'];this['state']['update'](Math['min'](this['deltaTime'],0.5));}this['lastTime']=_0x22a192;this['ctx']['clearRect'](0x0,0x0,_0xc5b23e['WIDTH'],_0xc5b23e['HEIGHT']);this['state']['draw'](this['ctx']);requestAnimationFrame(this['loop']);};this['tetris']=new _0x2ec9cc();this['state']=this['tetris'];this['state']['start']();window['addEventListener']('stateChange',_0x7c1e7e=>{switch(_0x7c1e7e['detail']['state']){case _0xc5b23e['GAME']:this['state']=this['tetris'];break;case _0xc5b23e['MENU']:break;case _0xc5b23e['GAMEOVER']:break;}this['state']['start']();});this['loop'](0x0);}['touch'](_0x316faf){this['state']['input'](_0x316faf);}}const _0x17c211=new _0xbe7cb9();const _0x1d51a2=new _0x42ad5d(()=>new _0x50c794());