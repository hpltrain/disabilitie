window.globalProvideData('slide', '{"title":"Find the best match for each law:","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide28","width":720,"height":540,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"5akMR6Rrb6V","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"noteq","valuea":"6JLB9uSSsya.5V9mPjHyCLw.$DragConnectData","typea":"property","valueb":"","typeb":"string"},{"kind":"compare","operator":"noteq","valuea":"6JLB9uSSsya.6MtsMDhMGJR.$DragConnectData","typea":"property","valueb":"","typeb":"string"},{"kind":"compare","operator":"noteq","valuea":"6JLB9uSSsya.6h2GN1WX3uU.$DragConnectData","typea":"property","valueb":"","typeb":"string"}]}},"thenActions":[{"kind":"eval_interaction","id":"_this.5WtDJBxrrwK"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_5pRrRkZxXju.InvalidPromptSlide"}}]}]},"ReviewInt_6JLB9uSSsya":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6JLB9uSSsya.63IlMGkDGRy"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6JLB9uSSsya.5V9mPjHyCLw"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6JLB9uSSsya.6SGaYMGNkxi"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6JLB9uSSsya.6MtsMDhMGJR"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6JLB9uSSsya.60BzhF38aFg"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6JLB9uSSsya.6h2GN1WX3uU"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5WtDJBxrrwK.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6JLB9uSSsya_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6JLB9uSSsya_IncorrectReview"}}]}]},"ReviewIntCorrectIncorrect_6JLB9uSSsya":{"kind":"actiongroup","actions":[{"kind":"set_review","objRef":{"type":"string","value":"6JLB9uSSsya.63IlMGkDGRy"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"6JLB9uSSsya.5V9mPjHyCLw"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"6JLB9uSSsya.6SGaYMGNkxi"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"6JLB9uSSsya.6MtsMDhMGJR"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"6JLB9uSSsya.60BzhF38aFg"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"6JLB9uSSsya.6h2GN1WX3uU"},"enabled":{"type":"boolean","value":true}}]},"AnsweredInt_6JLB9uSSsya":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6JLB9uSSsya"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_6JLB9uSSsya":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6JLB9uSSsya.63IlMGkDGRy"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6JLB9uSSsya.5V9mPjHyCLw"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6JLB9uSSsya.6SGaYMGNkxi"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6JLB9uSSsya.6MtsMDhMGJR"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6JLB9uSSsya.60BzhF38aFg"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6JLB9uSSsya.6h2GN1WX3uU"},"enabled":{"type":"boolean","value":false}}]},"6JLB9uSSsya_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"6cPcJISNXOg","typeb":"string"},{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5WtDJBxrrwK.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6SePX9EQZrC.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6JLB9uSSsya"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5WtDJBxrrwK.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5WtDJBxrrwK.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6JLB9uSSsya"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_5akMR6Rrb6V":{"kind":"actiongroup","actions":[{"kind":"playnextdrawslide"}]},"NavigationRestrictionPreviousSlide_5akMR6Rrb6V":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"adjustvar","variable":"_player.QuestionNumber","operator":"add","value":{"type":"number","value":1}}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000000001"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5pRrRkZxXju","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5pRrRkZxXju","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"6cPcJISNXOg","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6cPcJISNXOg","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6JLB9uSSsya"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6cPcJISNXOg","typea":"var","valueb":"6SePX9EQZrC","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6SePX9EQZrC.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6JLB9uSSsya"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6SePX9EQZrC.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6JLB9uSSsya"}]}]}],"elseActions":[{"kind":"exe_actiongroup","id":"6JLB9uSSsya_CheckAnswered"}]}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6cPcJISNXOg","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"playnextdrawslide"}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_5akMR6Rrb6V"}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5akMR6Rrb6V"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":10030,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6JLB9uSSsya.63IlMGkDGRy"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6JLB9uSSsya.5V9mPjHyCLw"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6JLB9uSSsya.6SGaYMGNkxi"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6JLB9uSSsya.6MtsMDhMGJR"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6JLB9uSSsya.60BzhF38aFg"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6JLB9uSSsya.6h2GN1WX3uU"}},{"kind":"show","transition":"custom","animationId":"Entrance","reverse":false,"objRef":{"type":"string","value":"6JLB9uSSsya"}},{"kind":"show","transition":"custom","animationId":"Entrance","reverse":false,"objRef":{"type":"string","value":"6itWFds2imO"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5WP1rieMT1X"}}]}]},"objects":[{"kind":"scrollarea","contentwidth":600,"contentheight":198,"objects":[{"kind":"shufflegroup","objects":[{"kind":"dragitem","style":"matching","connectdata":"choices.choice_6NPqT40Lex8","reviewdata":3,"shapemaskId":"","xPos":324,"yPos":132,"tabIndex":11,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":146,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xB7FDFF","alpha":100,"stop":0},{"kind":"color","rgb":"0xA1EDEF","alpha":100,"stop":100}]}}],"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_60BzhF38aFg_-1836292229","type":"vectortext","altText":"The part of the AODA that sets Information and Communications, Employment and other standards.","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":282,"bottom":40,"pngfb":false,"pr":{"l":"Lib","i":278}}},"html5data":{"xPos":-1,"yPos":-1,"width":293,"height":51,"strokewidth":0}},"width":292,"height":50,"resume":true,"useHandCursor":true,"id":"60BzhF38aFg"},{"kind":"dragitem","style":"matching","connectdata":"choices.choice_5Z6CNBtnWVn","reviewdata":2,"shapemaskId":"","xPos":324,"yPos":68,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":146,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xB7FDFF","alpha":100,"stop":0},{"kind":"color","rgb":"0xA1EDEF","alpha":100,"stop":100}]}}],"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6SGaYMGNkxi_-363647700","type":"vectortext","altText":"Sets accessibility standards that organizations must meet.","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":252,"bottom":45,"pngfb":false,"pr":{"l":"Lib","i":279}}},"html5data":{"xPos":-1,"yPos":-1,"width":293,"height":51,"strokewidth":0}},"width":292,"height":50,"resume":true,"useHandCursor":true,"id":"6SGaYMGNkxi"},{"kind":"dragitem","style":"matching","connectdata":"choices.choice_6eSO29gOLVS","reviewdata":1,"shapemaskId":"","xPos":324,"yPos":4,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":146,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":3,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xB7FDFF","alpha":100,"stop":0},{"kind":"color","rgb":"0xA1EDEF","alpha":100,"stop":100}]}}],"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_63IlMGkDGRy_204842072","type":"vectortext","altText":"Stipulates the legal Duty to accommodate the individual needs of people with disabilities","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":274,"bottom":41,"pngfb":false,"pr":{"l":"Lib","i":280}}},"html5data":{"xPos":-1,"yPos":-1,"width":293,"height":51,"strokewidth":0}},"width":292,"height":50,"resume":true,"useHandCursor":true,"id":"63IlMGkDGRy"}],"shuffle":true,"accType":"none","accLabelType":"text","shapemaskId":"","xPos":0,"yPos":0,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"width":0,"height":0,"resume":true,"useHandCursor":true,"id":""},{"kind":"droparea","style":"matching","reviewdata":3,"shapemaskId":"","xPos":16,"yPos":132,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":146,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6h2GN1WX3uU_1586284083","type":"vectortext","altText":"Integrated Accessibility Standards Regulation (IASR)","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":259,"bottom":45,"pngfb":false,"pr":{"l":"Lib","i":281}}},"html5data":{"xPos":-1,"yPos":-1,"width":293,"height":51,"strokewidth":0}},"width":292,"height":50,"resume":true,"useHandCursor":true,"id":"6h2GN1WX3uU"},{"kind":"droparea","style":"matching","reviewdata":2,"shapemaskId":"","xPos":16,"yPos":68,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":146,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6MtsMDhMGJR_-432757539","type":"vectortext","altText":"Accessibility for Ontarians with Disabilities Act (AODA)","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":239,"bottom":45,"pngfb":false,"pr":{"l":"Lib","i":282}}},"html5data":{"xPos":-1,"yPos":-1,"width":293,"height":51,"strokewidth":0}},"width":292,"height":50,"resume":true,"useHandCursor":true,"id":"6MtsMDhMGJR"},{"kind":"droparea","style":"matching","reviewdata":1,"shapemaskId":"","xPos":16,"yPos":4,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":146,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5V9mPjHyCLw_-1266120672","type":"vectortext","altText":"The Ontario Human Rights Code","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":265,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":283}}},"html5data":{"xPos":-1,"yPos":-1,"width":293,"height":51,"strokewidth":0}},"width":292,"height":50,"resume":true,"useHandCursor":true,"id":"5V9mPjHyCLw"}],"shapemaskId":"","xPos":36,"yPos":194,"tabIndex":2,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":160.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"html5data":{"url":"","xPos":36,"yPos":194,"width":648,"height":321,"strokewidth":0}},"animations":[{"kind":"animation","id":"Entrance","duration":750,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":750,"alpha":{"path":[{"kind":"segment","start":"0","dstart":"0","end":"100","dend":"0"}],"duration":750,"easing":"linear","easingdir":"easein"}}]}],"width":648,"height":321,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":0,"top":0,"right":648,"bottom":321,"altText":"Matching Drag and Drop","pngfb":false,"pr":{"l":"Lib","i":277}}},"id":"6JLB9uSSsya"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6itWFds2imO_300460964","id":"01","linkId":"txt__default_6itWFds2imO","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":468,"bottom":44,"pngfb":false,"pr":{"l":"Lib","i":285}}}],"shapemaskId":"","xPos":24,"yPos":50,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":257,"rotateYPos":26.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":514,"bottom":53,"altText":"Find the best match for each law:","pngfb":false,"pr":{"l":"Lib","i":284}},"html5data":{"xPos":-1,"yPos":-1,"width":515,"height":54,"strokewidth":0}},"animations":[{"kind":"animation","id":"Entrance","duration":100,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":100,"alpha":{"path":[{"kind":"segment","start":"0","dstart":"0","end":"100","dend":"0"}],"duration":100,"easing":"linear","easingdir":"easein"}}]}],"width":514,"height":53,"resume":true,"useHandCursor":true,"id":"6itWFds2imO"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","id":"01","linkId":"txt__default_5WP1rieMT1X","type":"richvartext","xPos":0,"yPos":0,"width":31,"height":44,"device":false,"valign":"center","shadowIndex":-1,"vartext":{"blocks":[{"spans":[{"text":"%_player.QuestionNumber%","style":{"fontSize":20,"fontIsBold":false,"fontFamily":"\\"LatoBold Charset0_vBoldEA24EE17\\",\\"Lato\\"","ascent":26.32,"descent":5.68,"leading":0,"underlinePosition":-1.6,"underlineThickness":2.133,"xHeight":13.68}}],"runs":[{"idx":0,"len":24,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Lato","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"shadow":{"offsetX":0.8,"offsetY":0.8,"color":"#969696"},"foregroundColor":"#FFFFFF","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"}}],"shapemaskId":"","xPos":648,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":25.5,"rotateYPos":27,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":51,"bottom":54,"altText":"%_player.QuestionNumber%","pngfb":false,"pr":{"l":"Lib","i":41}},"html5data":{"xPos":-1,"yPos":-1,"width":52,"height":55,"strokewidth":0}},"width":51,"height":54,"resume":true,"useHandCursor":true,"id":"5WP1rieMT1X"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6JLB9uSSsya_CorrectReview","id":"01","linkId":"6JLB9uSSsya_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":401,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":43}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":12,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":42}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6JLB9uSSsya_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6JLB9uSSsya_IncorrectReview","id":"01","linkId":"6JLB9uSSsya_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":409,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":45}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":13,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":44}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6JLB9uSSsya_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');