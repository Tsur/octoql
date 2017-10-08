/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */

"use strict";

function peg$subclass(child, parent) {
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message  = message;
  this.expected = expected;
  this.found    = found;
  this.location = location;
  this.name     = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },

        "class": function(expectation) {
          var escapedParts = "",
              i;

          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i]);
          }

          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },

        any: function(expectation) {
          return "any character";
        },

        end: function(expectation) {
          return "end of input";
        },

        other: function(expectation) {
          return expectation.description;
        }
      };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g,  '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g,  '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i, j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},

      peg$startRuleFunctions = { start: peg$parsestart },
      peg$startRuleFunction  = peg$parsestart,

      peg$c0 = function(q) { return q; },
      peg$c1 = peg$otherExpectation("comment"),
      peg$c2 = "--",
      peg$c3 = peg$literalExpectation("--", false),
      peg$c4 = function(f, s, w, t) { return {from:f, select:s, where:w, limit:t} },
      peg$c5 = peg$otherExpectation("From"),
      peg$c6 = "from",
      peg$c7 = peg$literalExpectation("from", true),
      peg$c8 = "/",
      peg$c9 = peg$literalExpectation("/", false),
      peg$c10 = function(user, repo) { return {user, repo}; },
      peg$c11 = peg$otherExpectation("Select"),
      peg$c12 = "select",
      peg$c13 = peg$literalExpectation("select", true),
      peg$c14 = function(fields) { return fields; },
      peg$c15 = peg$otherExpectation("Where"),
      peg$c16 = "where",
      peg$c17 = peg$literalExpectation("where", true),
      peg$c18 = function(filters) { return filters; },
      peg$c19 = peg$otherExpectation("Limit"),
      peg$c20 = "limit",
      peg$c21 = peg$literalExpectation("limit", true),
      peg$c22 = function(t) { return t ? t : 0; },
      peg$c23 = function(w1, w2) { return concat(w1, w2); },
      peg$c24 = ",",
      peg$c25 = peg$literalExpectation(",", false),
      peg$c26 = function(w) { return join(w) },
      peg$c27 = function(f1, f2) { return {filters: concat(map(f1, get('f')), [f2]), groups: map(f1, get('b'))}; },
      peg$c28 = function(f, b) { return {f, b}; },
      peg$c29 = function(left, op, right) { return { field: left, filter: op , value: right } },
      peg$c30 = "and",
      peg$c31 = peg$literalExpectation("and", true),
      peg$c32 = "or",
      peg$c33 = peg$literalExpectation("or", true),
      peg$c34 = "<=",
      peg$c35 = peg$literalExpectation("<=", false),
      peg$c36 = "<",
      peg$c37 = peg$literalExpectation("<", false),
      peg$c38 = ">=",
      peg$c39 = peg$literalExpectation(">=", false),
      peg$c40 = ">",
      peg$c41 = peg$literalExpectation(">", false),
      peg$c42 = "==",
      peg$c43 = peg$literalExpectation("==", false),
      peg$c44 = "equals",
      peg$c45 = peg$literalExpectation("equals", false),
      peg$c46 = "contains",
      peg$c47 = peg$literalExpectation("contains", false),
      peg$c48 = "not equals",
      peg$c49 = peg$literalExpectation("not equals", false),
      peg$c50 = "not contains",
      peg$c51 = peg$literalExpectation("not contains", false),
      peg$c52 = "[",
      peg$c53 = peg$literalExpectation("[", false),
      peg$c54 = "]",
      peg$c55 = peg$literalExpectation("]", false),
      peg$c56 = function(v) { return v; },
      peg$c57 = /^[a-zA-Z0-9_\-.]/,
      peg$c58 = peg$classExpectation([["a", "z"], ["A", "Z"], ["0", "9"], "_", "-", "."], false, false),
      peg$c59 = function(w) { return join(w); },
      peg$c60 = "\"",
      peg$c61 = peg$literalExpectation("\"", false),
      peg$c62 = /^[^"]/,
      peg$c63 = peg$classExpectation(["\""], true, false),
      peg$c64 = function(w) { return w ? join(w) : "" },
      peg$c65 = /^[1-9]/,
      peg$c66 = peg$classExpectation([["1", "9"]], false, false),
      peg$c67 = /^[0-9]/,
      peg$c68 = peg$classExpectation([["0", "9"]], false, false),
      peg$c69 = function(d1, d2) { return parseInt(d1+join(d2)); },
      peg$c70 = /^[ \t]/,
      peg$c71 = peg$classExpectation([" ", "\t"], false, false),
      peg$c72 = /^[\n\r\u2028\u2029]/,
      peg$c73 = peg$classExpectation(["\n", "\r", "\u2028", "\u2029"], false, false),
      peg$c74 = peg$anyExpectation(),

      peg$currPos          = 0,
      peg$savedPos         = 0,
      peg$posDetailsCache  = [{ line: 1, column: 1 }],
      peg$maxFailPos       = 0,
      peg$maxFailExpected  = [],
      peg$silentFails      = 0,

      peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos], p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line:   details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails   = peg$computePosDetails(endPos);

    return {
      start: {
        offset: startPos,
        line:   startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line:   endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parsestart() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsews();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parsews();
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsequery();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsews();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsews();
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c0(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecomment() {
    var s0, s1;

    peg$silentFails++;
    s0 = peg$parsesingleLineComment();
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c1); }
    }

    return s0;
  }

  function peg$parsesingleLineComment() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c2) {
      s1 = peg$c2;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c3); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$currPos;
      peg$silentFails++;
      s5 = peg$parselineTerminator();
      peg$silentFails--;
      if (s5 === peg$FAILED) {
        s4 = void 0;
      } else {
        peg$currPos = s4;
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsesourceCharacter();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$currPos;
        peg$silentFails++;
        s5 = peg$parselineTerminator();
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parsesourceCharacter();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsequery() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsecomment();
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsefrom();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseselect();
        if (s3 === peg$FAILED) {
          s3 = null;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parsewhere();
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parselimit();
            if (s5 === peg$FAILED) {
              s5 = null;
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c4(s2, s3, s4, s5);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsefrom() {
    var s0, s1, s2, s3, s4, s5, s6;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsews();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parsews();
    }
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 4).toLowerCase() === peg$c6) {
        s2 = input.substr(peg$currPos, 4);
        peg$currPos += 4;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c7); }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsews();
        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parsews();
          }
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseword();
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 47) {
              s5 = peg$c8;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c9); }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parseword();
              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c10(s4, s6);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c5); }
    }

    return s0;
  }

  function peg$parseselect() {
    var s0, s1, s2, s3, s4;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsews();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsews();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 6).toLowerCase() === peg$c12) {
        s2 = input.substr(peg$currPos, 6);
        peg$currPos += 6;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c13); }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsews();
        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parsews();
          }
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parselist_words();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c14(s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c11); }
    }

    return s0;
  }

  function peg$parsewhere() {
    var s0, s1, s2, s3, s4;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsews();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsews();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 5).toLowerCase() === peg$c16) {
        s2 = input.substr(peg$currPos, 5);
        peg$currPos += 5;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c17); }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsews();
        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parsews();
          }
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parselist_filters();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c18(s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c15); }
    }

    return s0;
  }

  function peg$parselimit() {
    var s0, s1, s2, s3, s4;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsews();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsews();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 5).toLowerCase() === peg$c20) {
        s2 = input.substr(peg$currPos, 5);
        peg$currPos += 5;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c21); }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsews();
        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parsews();
          }
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parsedigit();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c22(s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c19); }
    }

    return s0;
  }

  function peg$parselist_words() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsecomma_list_words();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parsecomma_list_words();
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseword();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c23(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecomma_list_words() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parseword();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsews();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsews();
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 44) {
          s3 = peg$c24;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c25); }
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parsews();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parsews();
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c26(s1);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsequoted_list_words() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsequoted_comma_list_words();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parsequoted_comma_list_words();
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsequoted_word();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c23(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsequoted_comma_list_words() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsequoted_word();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsews();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsews();
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 44) {
          s3 = peg$c24;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c25); }
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parsews();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parsews();
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c26(s1);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parselist_filters() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsecomma_list_filters();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parsecomma_list_filters();
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsefilter();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c27(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecomma_list_filters() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsefilter();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsews();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsews();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseboolean();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parsews();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parsews();
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c28(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsefilter() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parseword();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsews();
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsews();
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseoperator();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parsews();
          if (s5 !== peg$FAILED) {
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parsews();
            }
          } else {
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parsevalue();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c29(s1, s3, s5);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseboolean() {
    var s0;

    if (input.substr(peg$currPos, 3).toLowerCase() === peg$c30) {
      s0 = input.substr(peg$currPos, 3);
      peg$currPos += 3;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c31); }
    }
    if (s0 === peg$FAILED) {
      if (input.substr(peg$currPos, 2).toLowerCase() === peg$c32) {
        s0 = input.substr(peg$currPos, 2);
        peg$currPos += 2;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c33); }
      }
    }

    return s0;
  }

  function peg$parseoperator() {
    var s0;

    if (input.substr(peg$currPos, 2) === peg$c34) {
      s0 = peg$c34;
      peg$currPos += 2;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c35); }
    }
    if (s0 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 60) {
        s0 = peg$c36;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c37); }
      }
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c38) {
          s0 = peg$c38;
          peg$currPos += 2;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c39); }
        }
        if (s0 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 62) {
            s0 = peg$c40;
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c41); }
          }
          if (s0 === peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c42) {
              s0 = peg$c42;
              peg$currPos += 2;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c43); }
            }
            if (s0 === peg$FAILED) {
              if (input.substr(peg$currPos, 6) === peg$c44) {
                s0 = peg$c44;
                peg$currPos += 6;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c45); }
              }
              if (s0 === peg$FAILED) {
                if (input.substr(peg$currPos, 8) === peg$c46) {
                  s0 = peg$c46;
                  peg$currPos += 8;
                } else {
                  s0 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c47); }
                }
                if (s0 === peg$FAILED) {
                  if (input.substr(peg$currPos, 10) === peg$c48) {
                    s0 = peg$c48;
                    peg$currPos += 10;
                  } else {
                    s0 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c49); }
                  }
                  if (s0 === peg$FAILED) {
                    if (input.substr(peg$currPos, 12) === peg$c50) {
                      s0 = peg$c50;
                      peg$currPos += 12;
                    } else {
                      s0 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c51); }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parsevalue() {
    var s0;

    s0 = peg$parsearray_quoted_value();
    if (s0 === peg$FAILED) {
      s0 = peg$parsearray_value();
      if (s0 === peg$FAILED) {
        s0 = peg$parsequoted_word();
        if (s0 === peg$FAILED) {
          s0 = peg$parseword();
        }
      }
    }

    return s0;
  }

  function peg$parsearray_value() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 91) {
      s1 = peg$c52;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c53); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsews();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsews();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parselist_words();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parsews();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parsews();
          }
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 93) {
              s5 = peg$c54;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c55); }
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c56(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsearray_quoted_value() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 91) {
      s1 = peg$c52;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c53); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsews();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsews();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsequoted_list_words();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parsews();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parsews();
          }
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 93) {
              s5 = peg$c54;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c55); }
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c56(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseword() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    if (peg$c57.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c58); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c57.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c58); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c59(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsequoted_word() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 34) {
      s1 = peg$c60;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c61); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      if (peg$c62.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c63); }
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        if (peg$c62.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c63); }
        }
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 34) {
          s3 = peg$c60;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c61); }
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c64(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsedigit() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c65.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c66); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      if (peg$c67.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c68); }
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        if (peg$c67.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c68); }
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c69(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsews() {
    var s0;

    s0 = peg$parselineTerminator();
    if (s0 === peg$FAILED) {
      if (peg$c70.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c71); }
      }
    }

    return s0;
  }

  function peg$parselineTerminator() {
    var s0;

    if (peg$c72.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c73); }
    }

    return s0;
  }

  function peg$parsesourceCharacter() {
    var s0;

    if (input.length > peg$currPos) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c74); }
    }

    return s0;
  }


    function join(x){
      if(isString(x)) return x;
      return x.join('');
    }

    function isString(str){
      return typeof str === "string"
    }

    function concat(col1, col2) {
      return col1.concat(col2);
    }

    function map(col, fn) {
      return col.map(fn);
    }

    function get(prop) {
      return obj => obj[prop];
    }


  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse:       peg$parse
};
