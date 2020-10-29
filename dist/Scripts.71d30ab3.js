// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Scripts/questions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.questions = void 0;
var questions = [{
  qprompt: "How many Pokémon were in the first game?",
  c1: "A) 100",
  c2: "B) 151",
  c3: "C) 150",
  c4: "D) 101",
  answer: "B) 151",
  answered: false
}, {
  qprompt: "When was Pokémon FIRST released?",
  c1: "A) 1996",
  c2: "B) 1997",
  c3: "C) 1998",
  c4: "D) 1999",
  answer: "A) 1996",
  answered: false
}, {
  qprompt: "Can Pikachu learn Surf?",
  c1: "A) Yes",
  c2: "B) No",
  c3: "C) No but he can when he evolves",
  c4: "D) Yes but he can only use it in combat",
  answer: "A) Yes",
  answered: false
}, {
  qprompt: "How can (specific) Pokémon change gender?",
  c1: "A)Super Hidden Easter Eggs",
  c2: "B) Evolving",
  c3: "C) Trading",
  c4: "D) Never happens",
  answer: "B) Evolving",
  answered: false
}, {
  qprompt: "Which Pokémon has the highest base stat total (Adding all the stats from HP to Speed) ?",
  c1: "A) Mega Rayquaza",
  c2: "B) Mega Mewtwo X",
  c3: "C) Mega Mewtwo Y",
  c4: "D) All of the above",
  answer: "D) All of the above",
  answered: false
}, {
  qprompt: "Which trait affects your Pokémon's stats PERMANENTLY (Before Battle) ?",
  c1: "A) Beauty",
  c2: "B) Abilities",
  c3: "C) Nature",
  c4: "D) No such trait",
  answer: "C) Nature",
  answered: false
}, {
  qprompt: "What are IVs?",
  c1: "A) Injected Values",
  //what the police check for when they stop you
  c2: "B) Individual Values",
  c3: "C) Indeterminant Values",
  c4: "D) Don't Exist",
  answer: "B) Individual Values",
  answered: false
}, {
  qprompt: "What are EVs?",
  c1: "A) Effort Values",
  c2: "B) Energy Values",
  c3: "C) Entertaining Values",
  c4: "D) 1999",
  answer: "A) Effort Values",
  answered: false
}, {
  qprompt: "Who controls the majority of the Pokémon ranking and tiers?",
  c1: "A) Nintendo",
  c2: "B) Game Freak",
  c3: "C) SMOGON",
  c4: "D) DOSUKE",
  answer: "C) SMOGON",
  answered: false
}, {
  qprompt: "Which non-legendary Pokémon got banned FIRST from OU, the most popular format?",
  c1: "A) Garchomp",
  c2: "B) Wobbuffet",
  c3: "C) Salamence",
  c4: "D) Kangaskhan",
  answer: "B) Wobbuffet",
  answered: false
}, {
  qprompt: "Which Pokémon FIRST OUTCLASSED its evolution (in terms of the tiers) ?",
  c1: "A) Chansey",
  c2: "B) Porygon",
  c3: "C) Dusclops",
  c4: "D) None of the above",
  answer: "C) Dusclops",
  answered: false
}, {
  qprompt: "What is the most controversial mechanic in Pokémon?",
  //This is kinda an opinion question. Billy- Well yes but actually no because only one of these mechanics got banned.
  c1: "A) Hazards(Stealth Rock)",
  c2: "B) Trapping(Shadow Tag and Arena Trap)",
  c3: "C) Switching",
  c4: "D) Pokemon is above controversy",
  answer: "B) Trapping(Shadow Tag and Arena Trap)",
  answered: false
}, {
  qprompt: "How many IVs can exist in a single stat?",
  c1: "A) 23",
  c2: "B) 31",
  c3: "C) 256",
  c4: "D) 510",
  answer: "B) 31",
  answered: false
}, {
  qprompt: "How many total EVs can you have on a Pokémon?",
  c1: "A) 23",
  c2: "B) 31",
  c3: "C) 256",
  c4: "D) 510",
  answer: "D) 510",
  answered: false
}, {
  qprompt: "How many EVs can be converted to actual stats, assuming your Pokémon is LVL 100?",
  c1: "A) 507",
  c2: "B) 508",
  c3: "C) 509",
  c4: "D) 510",
  answer: "B) 508",
  answered: false
}, {
  qprompt: "Do DVs exist?",
  c1: "A) Yes",
  c2: "B) No",
  c3: "C) Yes but only in fan games",
  c4: "D) Yes but only in gen 1 and 2",
  answer: "D) Yes but only in gen 1 and 2",
  answered: false
}];
exports.questions = questions;
},{}],"Scripts/index.js":[function(require,module,exports) {
"use strict";

var _questions = require("./questions.js");

var points = 0;
var complete = false;
var category1 = "BASICS";
var category2 = "STATS";
var category3 = "COMPETITIVE";
var category4 = "VALUES";
var Body = document.body;

function checkforcompletion() {
  complete = true;
  var i;

  for (i = 0; i < 16; i++) {
    if (_questions.questions[i].answered) {
      console.log("question ".concat(i + 1, " complete"));
    } else {
      complete = false;
    }
  }
}

function startquestion(questionnum) {
  _questions.questions[questionnum].answered = true;
  Body.innerHTML = "";
  Body.insertAdjacentHTML("beforeend", '<ul id = "question">' + _questions.questions[questionnum].qprompt + "</ul>");
  Body.insertAdjacentHTML("beforeend", '<button class = "choice" id = "c1">' + _questions.questions[questionnum].c1 + "</button>");
  Body.insertAdjacentHTML("beforeend", '<button class = "choice" id = "c2">' + _questions.questions[questionnum].c2 + "</button>");
  Body.insertAdjacentHTML("beforeend", '<button class = "choice" id = "c3">' + _questions.questions[questionnum].c3 + "</button>");
  Body.insertAdjacentHTML("beforeend", '<button class = "choice" id = "c4">' + _questions.questions[questionnum].c4 + "</button>");
  document.getElementById("c1").addEventListener("click", function () {
    if (_questions.questions[questionnum].c1 == _questions.questions[questionnum].answer) {
      points = points + (100 * (questionnum % 4) + 100);
      correct();
      setTimeout(loadCategories, 1500);
    } else {
      wrong();
      setTimeout(loadCategories, 1500);
    }
  });
  document.getElementById("c2").addEventListener("click", function () {
    if (_questions.questions[questionnum].c2 == _questions.questions[questionnum].answer) {
      points = points + (100 * (questionnum % 4) + 100);
      correct();
      setTimeout(loadCategories, 1500);
    } else {
      wrong();
      setTimeout(loadCategories, 1500);
    }
  });
  document.getElementById("c3").addEventListener("click", function () {
    if (_questions.questions[questionnum].c3 == _questions.questions[questionnum].answer) {
      points = points + (100 * (questionnum % 4) + 100);
      correct();
      setTimeout(loadCategories, 1500);
    } else {
      wrong();
      setTimeout(loadCategories, 1500);
    }
  });
  document.getElementById("c4").addEventListener("click", function () {
    if (_questions.questions[questionnum].c4 == _questions.questions[questionnum].answer) {
      points = points + (100 * (questionnum % 4) + 100);
      correct();
      setTimeout(loadCategories, 1500);
    } else {
      wrong();
      setTimeout(loadCategories, 1500);
    }
  });
}

function loadCategories() {
  checkforcompletion();

  if (complete) {
    document.body.innerHTML = "<div class = completion>YOU HAVE FINISHED THE QUIZ!!!\n    Your score is ".concat(points, " out of 4000.</div>");
  } else {
    document.body.innerHTML = "<div class=\"row\" id=\"row1\">\n    <div class=\"category\">".concat(category1, "</div>\n    <div class=\"category\">").concat(category2, "</div>\n    <div class=\"category\">").concat(category3, "</div>\n    <div class=\"category\">").concat(category4, "</div>        \n    </div>\n    <div class=\"row\" id=\"row2\">\n    </div>\n    <div class=\"row\" id=\"row3\">\n    </div>\n    <div class=\"row\" id=\"row4\">\n    </div>\n    <div class=\"row\" id=\"row5\">\n    </div>\n    <div class=\"row\" id=\"score\"></div>");
    var i;

    for (i = 0; i < 4; i++) {
      document.getElementById("row".concat(i + 2)).innerHTML = "<button class=\"points-question\" id=\"q".concat(1 + i, "\">").concat(1 + i, "00</button> <button class=\"points-question\" id=\"q").concat(5 + i, "\">").concat(1 + i, "00</button> <button class=\"points-question\" id=\"q").concat(9 + i, "\">").concat(i + 1, "00</button> <button class=\"points-question\" id=\"q").concat(13 + i, "\">").concat(1 + i, "00</button>");
    }

    var q1 = document.getElementById("q1");
    var q2 = document.getElementById("q2");
    var q3 = document.getElementById("q3");
    var q4 = document.getElementById("q4");
    var q5 = document.getElementById("q5");
    var q6 = document.getElementById("q6");
    var q7 = document.getElementById("q7");
    var q8 = document.getElementById("q8");
    var q9 = document.getElementById("q9");
    var q10 = document.getElementById("q10");
    var q11 = document.getElementById("q11");
    var q12 = document.getElementById("q12");
    var q13 = document.getElementById("q13");
    var q14 = document.getElementById("q14");
    var q15 = document.getElementById("q15");
    var q16 = document.getElementById("q16");
    q1.addEventListener("click", function () {
      if (_questions.questions[0].answered) {
        alert("You already did this question!");
      } else {
        startquestion(0);
      }
    });
    q2.addEventListener("click", function () {
      if (_questions.questions[1].answered) {
        alert("You already did this question!");
      } else {
        startquestion(1);
      }
    });
    q3.addEventListener("click", function () {
      if (_questions.questions[2].answered) {
        alert("You already did this question!");
      } else {
        startquestion(2);
      }
    });
    q4.addEventListener("click", function () {
      if (_questions.questions[3].answered) {
        alert("You already did this question!");
      } else {
        startquestion(3);
      }
    });
    q5.addEventListener("click", function () {
      if (_questions.questions[4].answered) {
        alert("You already did this question!");
      } else {
        startquestion(4);
      }
    });
    q6.addEventListener("click", function () {
      if (_questions.questions[5].answered) {
        alert("You already did this question!");
      } else {
        startquestion(5);
      }
    });
    q7.addEventListener("click", function () {
      if (_questions.questions[6].answered) {
        alert("You already did this question!");
      } else {
        startquestion(6);
      }
    });
    q8.addEventListener("click", function () {
      if (_questions.questions[7].answered) {
        alert("You already did this question!");
      } else {
        startquestion(7);
      }
    });
    q9.addEventListener("click", function () {
      if (_questions.questions[8].answered) {
        alert("You already did this question!");
      } else {
        startquestion(8);
      }
    });
    q10.addEventListener("click", function () {
      if (_questions.questions[9].answered) {
        alert("You already did this question!");
      } else {
        startquestion(9);
      }
    });
    q11.addEventListener("click", function () {
      if (_questions.questions[10].answered) {
        alert("You already did this question!");
      } else {
        startquestion(10);
      }
    });
    q12.addEventListener("click", function () {
      if (_questions.questions[11].answered) {
        alert("You already did this question!");
      } else {
        startquestion(11);
      }
    });
    q13.addEventListener("click", function () {
      if (_questions.questions[12].answered) {
        alert("You already did this question!");
      } else {
        startquestion(12);
      }
    });
    q14.addEventListener("click", function () {
      if (_questions.questions[13].answered) {
        alert("You already did this question!");
      } else {
        startquestion(13);
      }
    });
    q15.addEventListener("click", function () {
      if (_questions.questions[14].answered) {
        alert("You already did this question!");
      } else {
        startquestion(14);
      }
    });
    q16.addEventListener("click", function () {
      if (_questions.questions[15].answered) {
        alert("You already did this question!");
      } else {
        startquestion(15);
      }
    });
    document.getElementById("score").innerHTML = "SCORE:".concat(points);
  }
}

loadCategories();

function correct() {
  Body.innerHTML = '<ul id = "correct">✓</ul>';
}

function wrong() {
  Body.innerHTML = '<ul id = "wrong">✘</ul>';
}
},{"./questions.js":"Scripts/questions.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52540" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","Scripts/index.js"], null)
//# sourceMappingURL=/Scripts.71d30ab3.js.map