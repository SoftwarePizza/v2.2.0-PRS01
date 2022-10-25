! function() {
    var n = {
            46: function() {
                function l(e) {
                    return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }! function(s) {
                    function a(e, t) {
                        this.options = t, this.$elementFilestyle = [], this.$element = s(e)
                    }
                    var r = 0;
                    a.prototype = {
                        clear: function() {
                            this.$element.val(""), this.$elementFilestyle.find(":text").val(""), this.$elementFilestyle.find(".badge").remove()
                        },
                        destroy: function() {
                            this.$element.removeAttr("style").removeData("filestyle"), this.$elementFilestyle.remove()
                        },
                        disabled: function(e) {
                            if (!0 === e) this.options.disabled || (this.$element.attr("disabled", "true"), this.$elementFilestyle.find("label").attr("disabled", "true"), this.options.disabled = !0);
                            else {
                                if (!1 !== e) return this.options.disabled;
                                this.options.disabled && (this.$element.removeAttr("disabled"), this.$elementFilestyle.find("label").removeAttr("disabled"), this.options.disabled = !1)
                            }
                        },
                        buttonBefore: function(e) {
                            if (!0 === e) this.options.buttonBefore || (this.options.buttonBefore = !0, this.options.input && (this.$elementFilestyle.remove(), this.constructor(), this.pushNameFiles()));
                            else {
                                if (!1 !== e) return this.options.buttonBefore;
                                this.options.buttonBefore && (this.options.buttonBefore = !1, this.options.input && (this.$elementFilestyle.remove(), this.constructor(), this.pushNameFiles()))
                            }
                        },
                        icon: function(e) {
                            if (!0 === e) this.options.icon || (this.options.icon = !0, this.$elementFilestyle.find("label").prepend(this.htmlIcon()));
                            else {
                                if (!1 !== e) return this.options.icon;
                                this.options.icon && (this.options.icon = !1, this.$elementFilestyle.find(".icon-span-filestyle").remove())
                            }
                        },
                        input: function(e) {
                            if (!0 === e) this.options.input || (this.options.input = !0, this.options.buttonBefore ? this.$elementFilestyle.append(this.htmlInput()) : this.$elementFilestyle.prepend(this.htmlInput()), this.$elementFilestyle.find(".badge").remove(), this.pushNameFiles(), this.$elementFilestyle.find(".group-span-filestyle").addClass("input-group-btn"));
                            else {
                                if (!1 !== e) return this.options.input;
                                this.options.input && (this.options.input = !1, this.$elementFilestyle.find(":text").remove(), 0 < (e = this.pushNameFiles()).length && this.options.badge && this.$elementFilestyle.find("label").append(' <span class="badge">' + e.length + "</span>"), this.$elementFilestyle.find(".group-span-filestyle").removeClass("input-group-btn"))
                            }
                        },
                        size: function(e) {
                            if (void 0 === e) return this.options.size;
                            var t = this.$elementFilestyle.find("label"),
                                n = this.$elementFilestyle.find("input");
                            t.removeClass("btn-lg btn-sm"), n.removeClass("input-lg input-sm"), "nr" != e && (t.addClass("btn-" + e), n.addClass("input-" + e))
                        },
                        placeholder: function(e) {
                            if (void 0 === e) return this.options.placeholder;
                            this.options.placeholder = e, this.$elementFilestyle.find("input").attr("placeholder", e)
                        },
                        buttonText: function(e) {
                            if (void 0 === e) return this.options.buttonText;
                            this.options.buttonText = e, this.$elementFilestyle.find("label .buttonText").html(this.options.buttonText)
                        },
                        buttonName: function(e) {
                            if (void 0 === e) return this.options.buttonName;
                            this.options.buttonName = e, this.$elementFilestyle.find("label").attr({
                                class: "btn " + this.options.buttonName
                            })
                        },
                        iconName: function(e) {
                            if (void 0 === e) return this.options.iconName;
                            this.$elementFilestyle.find(".icon-span-filestyle").attr({
                                class: "icon-span-filestyle " + this.options.iconName
                            })
                        },
                        htmlIcon: function() {
                            return this.options.icon ? '<span class="icon-span-filestyle ' + this.options.iconName + '"></span> ' : ""
                        },
                        htmlInput: function() {
                            return this.options.input ? '<input type="text" class="form-control ' + ("nr" == this.options.size ? "" : "input-" + this.options.size) + '" placeholder="' + this.options.placeholder + '" disabled> ' : ""
                        },
                        pushNameFiles: function() {
                            var e = "",
                                t = [];
                            void 0 === this.$element[0].files ? t[0] = {
                                name: this.$element[0] && this.$element[0].value
                            } : t = this.$element[0].files;
                            for (var n = 0; n < t.length; n++) e += t[n].name.split("\\").pop() + ", ";
                            return "" !== e ? this.$elementFilestyle.find(":text").val(e.replace(/\, $/g, "")) : this.$elementFilestyle.find(":text").val(""), t
                        },
                        constructor: function() {
                            var e, t, n = this,
                                i = n.$element.attr("id");
                            "" !== i && i || (n.$element.attr({
                                id: i = "filestyle-" + r
                            }), r++), t = '<span class="group-span-filestyle ' + (n.options.input ? "input-group-btn" : "") + '"><label for="' + i + '" class="btn ' + n.options.buttonName + " " + ("nr" == n.options.size ? "" : "btn-" + n.options.size) + '" ' + (n.options.disabled ? 'disabled="true"' : "") + ">" + n.htmlIcon() + '<span class="buttonText">' + n.options.buttonText + "</span></label></span>", e = n.options.buttonBefore ? t + n.htmlInput() : n.htmlInput() + t, n.$elementFilestyle = s('<div class="bootstrap-filestyle input-group">' + e + "</div>"), n.$elementFilestyle.find(".group-span-filestyle").attr("tabindex", "0").keypress(function(e) {
                                if (13 === e.keyCode || 32 === e.charCode) return n.$elementFilestyle.find("label").click(), !1
                            }), n.$element.css({
                                position: "absolute",
                                clip: "rect(0px 0px 0px 0px)"
                            }).attr("tabindex", "-1").after(n.$elementFilestyle), n.options.disabled && n.$element.attr("disabled", "true"), n.$element.change(function() {
                                var e = n.pushNameFiles();
                                0 == n.options.input && n.options.badge ? 0 == n.$elementFilestyle.find(".badge").length ? n.$elementFilestyle.find("label").append(' <span class="badge">' + e.length + "</span>") : 0 == e.length ? n.$elementFilestyle.find(".badge").remove() : n.$elementFilestyle.find(".badge").html(e.length) : n.$elementFilestyle.find(".badge").remove()
                            }), -1 < window.navigator.userAgent.search(/firefox/i) && n.$elementFilestyle.find("label").click(function() {
                                return n.$element.click(), !1
                            })
                        }
                    };
                    var e = s.fn.filestyle;
                    s.fn.filestyle = function(i, r) {
                        var o = "",
                            e = this.each(function() {
                                var e, t, n;
                                "file" === s(this).attr("type") && (t = (e = s(this)).data("filestyle"), n = s.extend({}, s.fn.filestyle.defaults, i, "object" === l(i) && i), t || (e.data("filestyle", t = new a(this, n)), t.constructor()), "string" == typeof i && (o = t[i](r)))
                            });
                        return void 0 !== l(o) ? o : e
                    }, s.fn.filestyle.defaults = {
                        buttonText: "Choose file",
                        iconName: "glyphicon glyphicon-folder-open",
                        buttonName: "btn-default",
                        size: "nr",
                        input: !0,
                        badge: !0,
                        icon: !0,
                        buttonBefore: !1,
                        disabled: !1,
                        placeholder: ""
                    }, s.fn.filestyle.noConflict = function() {
                        return s.fn.filestyle = e, this
                    }, s(function() {
                        s(".filestyle").each(function() {
                            var e = s(this),
                                t = {
                                    input: "false" !== e.attr("data-input"),
                                    icon: "false" !== e.attr("data-icon"),
                                    buttonBefore: "true" === e.attr("data-buttonBefore"),
                                    disabled: "true" === e.attr("data-disabled"),
                                    size: e.attr("data-size"),
                                    buttonText: e.attr("data-buttonText"),
                                    buttonName: e.attr("data-buttonName"),
                                    iconName: e.attr("data-iconName"),
                                    badge: "false" !== e.attr("data-badge"),
                                    placeholder: e.attr("data-placeholder")
                                };
                            e.filestyle(t)
                        })
                    })
                }(window.jQuery)
            },
            356: function() {
                var g;
                (g = jQuery).fn.scrollbox = function(m) {
                    return (m = g.extend({
                        linear: !1,
                        startDelay: 2,
                        delay: 3,
                        step: 5,
                        speed: 32,
                        switchItems: 1,
                        direction: "vertical",
                        distance: "auto",
                        autoPlay: !0,
                        onMouseOverPause: !0,
                        paused: !1,
                        queue: null,
                        listElement: "ul",
                        listItemElement: "li",
                        infiniteLoop: !0,
                        switchAmount: 0,
                        afterForward: null,
                        afterBackward: null,
                        triggerStackable: !1
                    }, m)).scrollOffset = "vertical" === m.direction ? "scrollTop" : "scrollLeft", m.queue && (m.queue = g("#" + m.queue)), this.each(function() {
                        var i, r, e, o, t, n, s, a, l, c = g(this),
                            u = null,
                            f = null,
                            d = !1,
                            p = 0,
                            h = 0;
                        m.onMouseOverPause && (c.bind("mouseover", function() {
                            d = !0
                        }), c.bind("mouseout", function() {
                            d = !1
                        })), i = c.children(m.listElement + ":first-child"), !1 === m.infiniteLoop && 0 === m.switchAmount && (m.switchAmount = i.children().length), n = function() {
                            if (!d) {
                                var e, t = i.children(m.listItemElement + ":first-child"),
                                    t = "auto" !== m.distance ? m.distance : "vertical" === m.direction ? t.outerHeight(!0) : t.outerWidth(!0),
                                    n = m.linear ? Math.min(c[0][m.scrollOffset] + m.step, t) : (n = Math.max(3, parseInt(.3 * (t - c[0][m.scrollOffset]), 10)), Math.min(c[0][m.scrollOffset] + n, t));
                                if (t <= (c[0][m.scrollOffset] = n)) {
                                    for (e = 0; e < m.switchItems; e++) m.queue && 0 < m.queue.find(m.listItemElement).length ? (i.append(m.queue.find(m.listItemElement)[0]), i.children(m.listItemElement + ":first-child").remove()) : i.append(i.children(m.listItemElement + ":first-child")), ++p;
                                    c[0][m.scrollOffset] = 0, clearInterval(u), u = null, g.isFunction(m.afterForward) && m.afterForward.call(c, {
                                        switchCount: p,
                                        currentFirstChild: i.children(m.listItemElement + ":first-child")
                                    }), m.triggerStackable && 0 !== h ? r() : !1 === m.infiniteLoop && p >= m.switchAmount || m.autoPlay && (f = setTimeout(o, 1e3 * m.delay))
                                }
                            }
                        }, s = function() {
                            if (!d) {
                                var e, t, n;
                                if (0 === c[0][m.scrollOffset]) {
                                    for (e = 0; e < m.switchItems; e++) i.children(m.listItemElement + ":last-child").insertBefore(i.children(m.listItemElement + ":first-child"));
                                    t = i.children(m.listItemElement + ":first-child"), t = "auto" !== m.distance ? m.distance : "vertical" === m.direction ? t.height() : t.width(), c[0][m.scrollOffset] = t
                                }
                                n = m.linear ? Math.max(c[0][m.scrollOffset] - m.step, 0) : (n = Math.max(3, parseInt(.3 * c[0][m.scrollOffset], 10)), Math.max(c[0][m.scrollOffset] - n, 0)), 0 === (c[0][m.scrollOffset] = n) && (--p, clearInterval(u), u = null, g.isFunction(m.afterBackward) && m.afterBackward.call(c, {
                                    switchCount: p,
                                    currentFirstChild: i.children(m.listItemElement + ":first-child")
                                }), m.triggerStackable && 0 !== h ? r() : m.autoPlay && (f = setTimeout(o, 1e3 * m.delay)))
                            }
                        }, r = function() {
                            0 !== h && (f = 0 < h ? (h--, setTimeout(o, 0)) : (h++, setTimeout(e, 0)))
                        }, o = function() {
                            clearInterval(u), u = setInterval(n, m.speed)
                        }, e = function() {
                            clearInterval(u), u = setInterval(s, m.speed)
                        }, a = function() {
                            m.autoPlay = !0, d = !1, clearInterval(u), u = setInterval(n, m.speed)
                        }, l = function() {
                            d = !0
                        }, t = function(e) {
                            m.delay = e || m.delay, clearTimeout(f), m.autoPlay && (f = setTimeout(o, 1e3 * m.delay))
                        }, m.autoPlay && (f = setTimeout(o, 1e3 * m.startDelay)), c.bind("resetClock", function(e) {
                            t(e)
                        }), c.bind("forward", function() {
                            m.triggerStackable ? null !== u ? h++ : o() : (clearTimeout(f), o())
                        }), c.bind("backward", function() {
                            m.triggerStackable ? null !== u ? h-- : e() : (clearTimeout(f), e())
                        }), c.bind("pauseHover", function() {
                            l()
                        }), c.bind("forwardHover", function() {
                            a()
                        }), c.bind("speedUp", function(e, t) {
                            "undefined" === t && (t = Math.max(1, parseInt(m.speed / 2, 10))), m.speed = t
                        }), c.bind("speedDown", function(e, t) {
                            "undefined" === t && (t = 2 * m.speed), m.speed = t
                        }), c.bind("updateConfig", function(e, t) {
                            m = g.extend(m, t)
                        })
                    })
                }
            },
            650: function() {
                ! function(x) {
                    "use strict";
                    var _ = 0;

                    function T(e, t) {
                        return x.map(e, function(e) {
                            return e + ".touchspin_" + t
                        })
                    }
                    x.fn.TouchSpin = function(b) {
                        if ("destroy" !== b) {
                            var w = {
                                    min: 0,
                                    max: 100,
                                    initval: "",
                                    replacementval: "",
                                    step: 1,
                                    decimals: 0,
                                    stepinterval: 100,
                                    forcestepdivisibility: "round",
                                    stepintervaldelay: 500,
                                    verticalbuttons: !1,
                                    verticalupclass: "glyphicon glyphicon-chevron-up",
                                    verticaldownclass: "glyphicon glyphicon-chevron-down",
                                    prefix: "",
                                    postfix: "",
                                    prefix_extraclass: "",
                                    postfix_extraclass: "",
                                    booster: !0,
                                    boostat: 10,
                                    maxboostedstep: !1,
                                    mousewheel: !0,
                                    buttondown_class: "btn btn-default",
                                    buttonup_class: "btn btn-default",
                                    buttondown_txt: "-",
                                    buttonup_txt: "+"
                                },
                                S = {
                                    min: "min",
                                    max: "max",
                                    initval: "init-val",
                                    replacementval: "replacement-val",
                                    step: "step",
                                    decimals: "decimals",
                                    stepinterval: "step-interval",
                                    verticalbuttons: "vertical-buttons",
                                    verticalupclass: "vertical-up-class",
                                    verticaldownclass: "vertical-down-class",
                                    forcestepdivisibility: "force-step-divisibility",
                                    stepintervaldelay: "step-interval-delay",
                                    prefix: "prefix",
                                    postfix: "postfix",
                                    prefix_extraclass: "prefix-extra-class",
                                    postfix_extraclass: "postfix-extra-class",
                                    booster: "booster",
                                    boostat: "boostat",
                                    maxboostedstep: "max-boosted-step",
                                    mousewheel: "mouse-wheel",
                                    buttondown_class: "button-down-class",
                                    buttonup_class: "button-up-class",
                                    buttondown_txt: "button-down-txt",
                                    buttonup_txt: "button-up-txt"
                                };
                            return this.each(function() {
                                var a, l, n, i, e, t, r, o, c = x(this),
                                    s = c.data(),
                                    u = 0,
                                    f = !1;

                                function d() {
                                    var e, t, n = c.val();
                                    "" !== n ? 0 < a.decimals && "." === n || (e = parseFloat(n), (t = e = isNaN(e) ? "" !== a.replacementval ? a.replacementval : 0 : e).toString() !== n && (t = e), e < a.min && (t = a.min), t = function(e) {
                                        switch (a.forcestepdivisibility) {
                                            case "round":
                                                return (Math.round(e / a.step) * a.step).toFixed(a.decimals);
                                            case "floor":
                                                return (Math.floor(e / a.step) * a.step).toFixed(a.decimals);
                                            case "ceil":
                                                return (Math.ceil(e / a.step) * a.step).toFixed(a.decimals);
                                            default:
                                                return e
                                        }
                                    }(t = e > a.max ? a.max : t), Number(n).toString() !== t.toString() && (c.val(t), c.trigger("change"))) : "" !== a.replacementval && (c.val(a.replacementval), c.trigger("change"))
                                }

                                function p() {
                                    if (a.booster) {
                                        var e = Math.pow(2, Math.floor(u / a.boostat)) * a.step;
                                        return a.maxboostedstep && e > a.maxboostedstep && (e = a.maxboostedstep, i = Math.round(i / e) * e), Math.max(a.step, e)
                                    }
                                    return a.step
                                }

                                function h() {
                                    d(), i = parseFloat(n.input.val());
                                    var e = i = isNaN(i) ? 0 : i,
                                        t = p();
                                    (i += t) > a.max && (i = a.max, c.trigger("touchspin.on.max"), v()), n.input.val(Number(i).toFixed(a.decimals)), e !== i && c.trigger("change")
                                }

                                function m() {
                                    d(), i = parseFloat(n.input.val());
                                    var e = i = isNaN(i) ? 0 : i,
                                        t = p();
                                    (i -= t) < a.min && (i = a.min, c.trigger("touchspin.on.min"), v()), n.input.val(i.toFixed(a.decimals)), e !== i && c.trigger("change")
                                }

                                function g() {
                                    v(), u = 0, f = "down", c.trigger("touchspin.on.startspin"), c.trigger("touchspin.on.startdownspin"), r = setTimeout(function() {
                                        e = setInterval(function() {
                                            u++, m()
                                        }, a.stepinterval)
                                    }, a.stepintervaldelay)
                                }

                                function y() {
                                    v(), u = 0, f = "up", c.trigger("touchspin.on.startspin"), c.trigger("touchspin.on.startupspin"), o = setTimeout(function() {
                                        t = setInterval(function() {
                                            u++, h()
                                        }, a.stepinterval)
                                    }, a.stepintervaldelay)
                                }

                                function v() {
                                    switch (clearTimeout(r), clearTimeout(o), clearInterval(e), clearInterval(t), f) {
                                        case "up":
                                            c.trigger("touchspin.on.stopupspin"), c.trigger("touchspin.on.stopspin");
                                            break;
                                        case "down":
                                            c.trigger("touchspin.on.stopdownspin"), c.trigger("touchspin.on.stopspin")
                                    }
                                    u = 0, f = !1
                                }
                                c.data("alreadyinitialized") || (c.data("alreadyinitialized", !0), _ += 1, c.data("spinnerid", _), c.is("input") && ("" !== (a = x.extend({}, w, s, function() {
                                    var n = {};
                                    return x.each(S, function(e, t) {
                                        t = "bts-" + t;
                                        c.is("[data-" + t + "]") && (n[e] = c.data(t))
                                    }), n
                                }(), b)).initval && "" === c.val() && c.val(a.initval), d(), function() {
                                    var e = c.val(),
                                        t = c.parent();
                                    "" !== e && (e = Number(e).toFixed(a.decimals));
                                    c.data("initvalue", e).val(e), c.addClass("form-control"), t.hasClass("input-group") ? function(e) {
                                        e.addClass("bootstrap-touchspin");
                                        var t, n, i = c.prev(),
                                            r = c.next(),
                                            o = '<span class="input-group-addon bootstrap-touchspin-prefix">' + a.prefix + "</span>",
                                            s = '<span class="input-group-addon bootstrap-touchspin-postfix">' + a.postfix + "</span>";
                                        i.hasClass("input-group-btn") ? (t = '<button class="' + a.buttondown_class + ' bootstrap-touchspin-down" type="button">' + a.buttondown_txt + "</button>", i.append(t)) : (t = '<span class="input-group-btn"><button class="' + a.buttondown_class + ' bootstrap-touchspin-down" type="button">' + a.buttondown_txt + "</button></span>", x(t).insertBefore(c));
                                        r.hasClass("input-group-btn") ? (n = '<button class="' + a.buttonup_class + ' bootstrap-touchspin-up" type="button">' + a.buttonup_txt + "</button>", r.prepend(n)) : (n = '<span class="input-group-btn"><button class="' + a.buttonup_class + ' bootstrap-touchspin-up" type="button">' + a.buttonup_txt + "</button></span>", x(n).insertAfter(c));
                                        x(o).insertBefore(c), x(s).insertAfter(c), l = e
                                    }(t) : function() {
                                        var e;
                                        e = a.verticalbuttons ? '<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">' + a.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + a.postfix + '</span><span class="input-group-btn-vertical"><button class="' + a.buttondown_class + ' bootstrap-touchspin-up" type="button"><i class="' + a.verticalupclass + '"></i></button><button class="' + a.buttonup_class + ' bootstrap-touchspin-down" type="button"><i class="' + a.verticaldownclass + '"></i></button></span></div>' : '<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="' + a.buttondown_class + ' bootstrap-touchspin-down" type="button">' + a.buttondown_txt + '</button></span><span class="input-group-addon bootstrap-touchspin-prefix">' + a.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + a.postfix + '</span><span class="input-group-btn"><button class="' + a.buttonup_class + ' bootstrap-touchspin-up" type="button">' + a.buttonup_txt + "</button></span></div>";
                                        l = x(e).insertBefore(c), x(".bootstrap-touchspin-prefix", l).after(c), c.hasClass("input-sm") ? l.addClass("input-group-sm") : c.hasClass("input-lg") && l.addClass("input-group-lg")
                                    }()
                                }(), n = {
                                    down: x(".bootstrap-touchspin-down", l),
                                    up: x(".bootstrap-touchspin-up", l),
                                    input: x("input", l),
                                    prefix: x(".bootstrap-touchspin-prefix", l).addClass(a.prefix_extraclass),
                                    postfix: x(".bootstrap-touchspin-postfix", l).addClass(a.postfix_extraclass)
                                }, function() {
                                    "" === a.prefix && n.prefix.hide();
                                    "" === a.postfix && n.postfix.hide()
                                }(), c.on("keydown", function(e) {
                                    var t = e.keyCode || e.which;
                                    38 === t ? ("up" !== f && (h(), y()), e.preventDefault()) : 40 === t && ("down" !== f && (m(), g()), e.preventDefault())
                                }), c.on("keyup", function(e) {
                                    e = e.keyCode || e.which;
                                    38 !== e && 40 !== e || v()
                                }), c.on("blur", function() {
                                    d()
                                }), n.down.on("keydown", function(e) {
                                    var t = e.keyCode || e.which;
                                    32 !== t && 13 !== t || ("down" !== f && (m(), g()), e.preventDefault())
                                }), n.down.on("keyup", function(e) {
                                    e = e.keyCode || e.which;
                                    32 !== e && 13 !== e || v()
                                }), n.up.on("keydown", function(e) {
                                    var t = e.keyCode || e.which;
                                    32 !== t && 13 !== t || ("up" !== f && (h(), y()), e.preventDefault())
                                }), n.up.on("keyup", function(e) {
                                    e = e.keyCode || e.which;
                                    32 !== e && 13 !== e || v()
                                }), n.down.on("mousedown.touchspin", function(e) {
                                    n.down.off("touchstart.touchspin"), c.is(":disabled") || (m(), g(), e.preventDefault(), e.stopPropagation())
                                }), n.down.on("touchstart.touchspin", function(e) {
                                    n.down.off("mousedown.touchspin"), c.is(":disabled") || (m(), g(), e.preventDefault(), e.stopPropagation())
                                }), n.up.on("mousedown.touchspin", function(e) {
                                    n.up.off("touchstart.touchspin"), c.is(":disabled") || (h(), y(), e.preventDefault(), e.stopPropagation())
                                }), n.up.on("touchstart.touchspin", function(e) {
                                    n.up.off("mousedown.touchspin"), c.is(":disabled") || (h(), y(), e.preventDefault(), e.stopPropagation())


                                }), n.up.on("mouseout touchleave touchend touchcancel", function(e) {
                                    f && (e.stopPropagation(), v())
                                }), n.down.on("mouseout touchleave touchend touchcancel", function(e) {
                                    f && (e.stopPropagation(), v())
                                }), n.down.on("mousemove touchmove", function(e) {
                                    f && (e.stopPropagation(), e.preventDefault())
                                }), n.up.on("mousemove touchmove", function(e) {
                                    f && (e.stopPropagation(), e.preventDefault())
                                }), x(document).on(T(["mouseup", "touchend", "touchcancel"], _).join(" "), function(e) {
                                    f && (e.preventDefault(), v())
                                }), x(document).on(T(["mousemove", "touchmove", "scroll", "scrollstart"], _).join(" "), function(e) {
                                    f && (e.preventDefault(), v())
                                }), c.on("mousewheel DOMMouseScroll", function(e) {
                                    var t;
                                    a.mousewheel && c.is(":focus") && (t = e.originalEvent.wheelDelta || -e.originalEvent.deltaY || -e.originalEvent.detail, e.stopPropagation(), e.preventDefault(), (t < 0 ? m : h)())
                                }), c.on("touchspin.uponce", function() {
                                    v(), h()
                                }), c.on("touchspin.downonce", function() {
                                    v(), m()
                                }), c.on("touchspin.startupspin", function() {
                                    y()
                                }), c.on("touchspin.startdownspin", function() {
                                    g()
                                }), c.on("touchspin.stopspin", function() {
                                    v()
                                }), c.on("touchspin.updatesettings", function(e, t) {
                                    ! function(e) {
                                        (function(e) {
                                            a = x.extend({}, a, e)
                                        })(e), d();
                                        e = n.input.val();
                                        "" !== e && (e = Number(n.input.val()), n.input.val(e.toFixed(a.decimals)))
                                    }(t)
                                }), n.input.css("display", "block")))
                            })
                        }
                        this.each(function() {
                            var e = x(this).data();
                            x(document).off(T(["mouseup", "touchend", "touchcancel", "mousemove", "touchmove", "scroll", "scrollstart"], e.spinnerid).join(" "))
                        })
                    }
                }(jQuery)
            },
            249: function() {
                function m(e) {
                    return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");

                function w(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function e(e) {
                    var t = this,
                        n = !1;
                    return r(this).one(o.TRANSITION_END, function() {
                        n = !0
                    }), setTimeout(function() {
                        n || o.triggerTransitionEnd(t)
                    }, e), this
                }

                function i(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                var r, t, n, o, S, x, _, g;
                ! function() {
                    var e = jQuery.fn.jquery.split(" ")[0].split(".");
                    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
                }(), S = "function" == typeof Symbol && "symbol" == m(Symbol.iterator) ? function(e) {
                        return m(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : m(e)
                    }, r = jQuery, t = !(x = function(e, t, n) {
                        return t && i(e.prototype, t), n && i(e, n), e
                    }), n = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    }, o = {
                        TRANSITION_END: "bsTransitionEnd",
                        getUID: function(e) {
                            for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
                            return e
                        },
                        getSelectorFromElement: function(e) {
                            var t = e.getAttribute("data-target");
                            return t || (t = e.getAttribute("href") || "", t = /^#[a-z]/i.test(t) ? t : null), t
                        },
                        reflow: function(e) {
                            new Function("bs", "return bs")(e.offsetHeight)
                        },
                        triggerTransitionEnd: function(e) {
                            r(e).trigger(t.end)
                        },
                        supportsTransitionEnd: function() {
                            return Boolean(t)
                        },
                        typeCheckConfig: function(e, t, n) {
                            for (var i in n)
                                if (n.hasOwnProperty(i)) {
                                    var r = n[i],
                                        o = t[i],
                                        s = o && ((a = o)[0] || a).nodeType ? "element" : (o = o, {}.toString.call(o).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
                                    if (!new RegExp(r).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                                } var a
                        }
                    }, t = function() {
                        if (window.QUnit) return !1;
                        var e, t = document.createElement("bootstrap");
                        for (e in n)
                            if (void 0 !== t.style[e]) return {
                                end: n[e]
                            };
                        return !1
                    }(), r.fn.emulateTransitionEnd = e, o.supportsTransitionEnd() && (r.event.special[o.TRANSITION_END] = {
                        bindType: t.end,
                        delegateType: t.end,
                        handle: function(e) {
                            if (r(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                        }
                    }), _ = o,
                    function(i) {
                        var e = "alert",
                            r = "bs.alert",
                            t = "." + r,
                            n = i.fn[e],
                            o = {
                                CLOSE: "close" + t,
                                CLOSED: "closed" + t,
                                CLICK_DATA_API: "click" + t + ".data-api"
                            },
                            s = "alert",
                            a = "fade",
                            l = "in",
                            c = (u.prototype.close = function(e) {
                                e = e || this._element;
                                e = this._getRootElement(e);
                                this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
                            }, u.prototype.dispose = function() {
                                i.removeData(this._element, r), this._element = null
                            }, u.prototype._getRootElement = function(e) {
                                var t = _.getSelectorFromElement(e),
                                    n = !1;
                                return n = (n = t ? i(t)[0] : n) || i(e).closest("." + s)[0]
                            }, u.prototype._triggerCloseEvent = function(e) {
                                var t = i.Event(o.CLOSE);
                                return i(e).trigger(t), t
                            }, u.prototype._removeElement = function(e) {
                                return i(e).removeClass(l), _.supportsTransitionEnd() && i(e).hasClass(a) ? void i(e).one(_.TRANSITION_END, i.proxy(this._destroyElement, this, e)).emulateTransitionEnd(150) : void this._destroyElement(e)
                            }, u.prototype._destroyElement = function(e) {
                                i(e).detach().trigger(o.CLOSED).remove()
                            }, u._jQueryInterface = function(n) {
                                return this.each(function() {
                                    var e = i(this),
                                        t = e.data(r);
                                    t || (t = new u(this), e.data(r, t)), "close" === n && t[n](this)
                                })
                            }, u._handleDismiss = function(t) {
                                return function(e) {
                                    e && e.preventDefault(), t.close(this)
                                }
                            }, x(u, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.0.0-alpha.5"
                                }
                            }]), u);

                        function u(e) {
                            w(this, u), this._element = e
                        }
                        i(document).on(o.CLICK_DATA_API, '[data-dismiss="alert"]', c._handleDismiss(new c)), i.fn[e] = c._jQueryInterface, i.fn[e].Constructor = c, i.fn[e].noConflict = function() {
                            return i.fn[e] = n, c._jQueryInterface
                        }
                    }(jQuery),
                    function(i) {
                        var e = "button",
                            n = "bs.button",
                            t = "." + n,
                            r = ".data-api",
                            o = i.fn[e],
                            s = "active",
                            a = "btn",
                            l = "focus",
                            c = '[data-toggle^="button"]',
                            u = '[data-toggle="buttons"]',
                            f = "input",
                            d = ".active",
                            p = ".btn",
                            r = {
                                CLICK_DATA_API: "click" + t + r,
                                FOCUS_BLUR_DATA_API: "focus" + t + r + " blur" + t + r
                            },
                            h = (m.prototype.toggle = function() {
                                var e, t = !0,
                                    n = i(this._element).closest(u)[0];
                                n ? (e = i(this._element).find(f)[0]) && ("radio" === e.type && (e.checked && i(this._element).hasClass(s) ? t = !1 : (n = i(n).find(d)[0]) && i(n).removeClass(s)), t && (e.checked = !i(this._element).hasClass(s), i(this._element).trigger("change")), e.focus()) : this._element.setAttribute("aria-pressed", !i(this._element).hasClass(s)), t && i(this._element).toggleClass(s)
                            }, m.prototype.dispose = function() {
                                i.removeData(this._element, n), this._element = null
                            }, m._jQueryInterface = function(t) {
                                return this.each(function() {
                                    var e = i(this).data(n);
                                    e || (e = new m(this), i(this).data(n, e)), "toggle" === t && e[t]()
                                })
                            }, x(m, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.0.0-alpha.5"
                                }
                            }]), m);

                        function m(e) {
                            w(this, m), this._element = e
                        }
                        i(document).on(r.CLICK_DATA_API, c, function(e) {
                            e.preventDefault();
                            e = e.target;
                            i(e).hasClass(a) || (e = i(e).closest(p)), h._jQueryInterface.call(i(e), "toggle")
                        }).on(r.FOCUS_BLUR_DATA_API, c, function(e) {
                            var t = i(e.target).closest(p)[0];
                            i(t).toggleClass(l, /^focus(in)?$/.test(e.type))
                        }), i.fn[e] = h._jQueryInterface, i.fn[e].Constructor = h, i.fn[e].noConflict = function() {
                            return i.fn[e] = o, h._jQueryInterface
                        }
                    }(jQuery),
                    function(a) {
                        var t = "carousel",
                            r = "bs.carousel",
                            e = "." + r,
                            n = ".data-api",
                            i = a.fn[t],
                            o = {
                                interval: 5e3,
                                keyboard: !0,
                                slide: !1,
                                pause: "hover",
                                wrap: !0
                            },
                            s = {
                                interval: "(number|boolean)",
                                keyboard: "boolean",
                                slide: "(boolean|string)",
                                pause: "(string|boolean)",
                                wrap: "boolean"
                            },
                            l = "next",
                            c = "prev",
                            u = {
                                SLIDE: "slide" + e,
                                SLID: "slid" + e,
                                KEYDOWN: "keydown" + e,
                                MOUSEENTER: "mouseenter" + e,
                                MOUSELEAVE: "mouseleave" + e,
                                LOAD_DATA_API: "load" + e + n,
                                CLICK_DATA_API: "click" + e + n
                            },
                            f = "carousel",
                            d = "active",
                            p = "slide",
                            h = "right",
                            m = "left",
                            g = {
                                ACTIVE: ".active",
                                ACTIVE_ITEM: ".active.carousel-item",
                                ITEM: ".carousel-item",
                                NEXT_PREV: ".next, .prev",
                                INDICATORS: ".carousel-indicators",
                                DATA_SLIDE: "[data-slide], [data-slide-to]",
                                DATA_RIDE: '[data-ride="carousel"]'
                            },
                            y = (v.prototype.next = function() {
                                this._isSliding || this._slide(l)
                            }, v.prototype.nextWhenVisible = function() {
                                document.hidden || this.next()
                            }, v.prototype.prev = function() {
                                this._isSliding || this._slide(c)
                            }, v.prototype.pause = function(e) {
                                e || (this._isPaused = !0), a(this._element).find(g.NEXT_PREV)[0] && _.supportsTransitionEnd() && (_.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                            }, v.prototype.cycle = function(e) {
                                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval(a.proxy(document.visibilityState ? this.nextWhenVisible : this.next, this), this._config.interval))
                            }, v.prototype.to = function(e) {
                                var t = this;
                                this._activeElement = a(this._element).find(g.ACTIVE_ITEM)[0];
                                var n = this._getItemIndex(this._activeElement);
                                if (!(e > this._items.length - 1 || e < 0))
                                    if (this._isSliding) a(this._element).one(u.SLID, function() {
                                        return t.to(e)
                                    });
                                    else {
                                        if (n === e) return this.pause(), void this.cycle();
                                        this._slide(n < e ? l : c, this._items[e])
                                    }
                            }, v.prototype.dispose = function() {
                                a(this._element).off(e), a.removeData(this._element, r), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                            }, v.prototype._getConfig = function(e) {
                                return e = a.extend({}, o, e), _.typeCheckConfig(t, e, s), e
                            }, v.prototype._addEventListeners = function() {
                                this._config.keyboard && a(this._element).on(u.KEYDOWN, a.proxy(this._keydown, this)), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || a(this._element).on(u.MOUSEENTER, a.proxy(this.pause, this)).on(u.MOUSELEAVE, a.proxy(this.cycle, this))
                            }, v.prototype._keydown = function(e) {
                                if (e.preventDefault(), !/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                                    case 37:
                                        this.prev();
                                        break;
                                    case 39:
                                        this.next();
                                        break;
                                    default:
                                        return
                                }
                            }, v.prototype._getItemIndex = function(e) {
                                return this._items = a.makeArray(a(e).parent().find(g.ITEM)), this._items.indexOf(e)
                            }, v.prototype._getItemByDirection = function(e, t) {
                                var n = e === l,
                                    i = e === c,
                                    r = this._getItemIndex(t),
                                    o = this._items.length - 1;
                                if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
                                e = (r + (e === c ? -1 : 1)) % this._items.length;
                                return -1 == e ? this._items[this._items.length - 1] : this._items[e]
                            }, v.prototype._triggerSlideEvent = function(e, t) {
                                t = a.Event(u.SLIDE, {
                                    relatedTarget: e,
                                    direction: t
                                });
                                return a(this._element).trigger(t), t
                            }, v.prototype._setActiveIndicatorElement = function(e) {
                                this._indicatorsElement && (a(this._indicatorsElement).find(g.ACTIVE).removeClass(d), (e = this._indicatorsElement.children[this._getItemIndex(e)]) && a(e).addClass(d))
                            }, v.prototype._slide = function(e, t) {
                                var n, i = this,
                                    r = a(this._element).find(g.ACTIVE_ITEM)[0],
                                    o = t || r && this._getItemByDirection(e, r),
                                    t = Boolean(this._interval),
                                    s = e === l ? m : h;
                                o && a(o).hasClass(d) ? this._isSliding = !1 : !this._triggerSlideEvent(o, s).isDefaultPrevented() && r && o && (this._isSliding = !0, t && this.pause(), this._setActiveIndicatorElement(o), n = a.Event(u.SLID, {
                                    relatedTarget: o,
                                    direction: s
                                }), _.supportsTransitionEnd() && a(this._element).hasClass(p) ? (a(o).addClass(e), _.reflow(o), a(r).addClass(s), a(o).addClass(s), a(r).one(_.TRANSITION_END, function() {
                                    a(o).removeClass(s).removeClass(e), a(o).addClass(d), a(r).removeClass(d).removeClass(e).removeClass(s), i._isSliding = !1, setTimeout(function() {
                                        return a(i._element).trigger(n)
                                    }, 0)
                                }).emulateTransitionEnd(600)) : (a(r).removeClass(d), a(o).addClass(d), this._isSliding = !1, a(this._element).trigger(n)), t && this.cycle())
                            }, v._jQueryInterface = function(i) {
                                return this.each(function() {
                                    var e = a(this).data(r),
                                        t = a.extend({}, o, a(this).data());
                                    "object" === (void 0 === i ? "undefined" : S(i)) && a.extend(t, i);
                                    var n = "string" == typeof i ? i : t.slide;
                                    if (e || (e = new v(this, t), a(this).data(r, e)), "number" == typeof i) e.to(i);
                                    else if ("string" == typeof n) {
                                        if (void 0 === e[n]) throw new Error('No method named "' + n + '"');
                                        e[n]()
                                    } else t.interval && (e.pause(), e.cycle())
                                })
                            }, v._dataApiClickHandler = function(e) {
                                var t, n, i = _.getSelectorFromElement(this);
                                !i || (t = a(i)[0]) && a(t).hasClass(f) && (n = a.extend({}, a(t).data(), a(this).data()), (i = this.getAttribute("data-slide-to")) && (n.interval = !1), v._jQueryInterface.call(a(t), n), i && a(t).data(r).to(i), e.preventDefault())
                            }, x(v, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.0.0-alpha.5"
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return o
                                }
                            }]), v);

                        function v(e, t) {
                            w(this, v), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(t), this._element = a(e)[0], this._indicatorsElement = a(this._element).find(g.INDICATORS)[0], this._addEventListeners()
                        }
                        a(document).on(u.CLICK_DATA_API, g.DATA_SLIDE, y._dataApiClickHandler), a(window).on(u.LOAD_DATA_API, function() {
                            a(g.DATA_RIDE).each(function() {
                                var e = a(this);
                                y._jQueryInterface.call(e, e.data())
                            })
                        }), a.fn[t] = y._jQueryInterface, a.fn[t].Constructor = y, a.fn[t].noConflict = function() {
                            return a.fn[t] = i, y._jQueryInterface
                        }
                    }(jQuery),
                    function(o) {
                        var t = "collapse",
                            s = "bs.collapse",
                            e = "." + s,
                            n = o.fn[t],
                            r = {
                                toggle: !0,
                                parent: ""
                            },
                            i = {
                                toggle: "boolean",
                                parent: "string"
                            },
                            a = {
                                SHOW: "show" + e,
                                SHOWN: "shown" + e,
                                HIDE: "hide" + e,
                                HIDDEN: "hidden" + e,
                                CLICK_DATA_API: "click" + e + ".data-api"
                            },
                            l = "in",
                            c = "collapse",
                            u = "collapsing",
                            f = "collapsed",
                            d = "width",
                            p = "height",
                            h = ".card > .in, .card > .collapsing",
                            e = '[data-toggle="collapse"]',
                            m = (g.prototype.toggle = function() {
                                o(this._element).hasClass(l) ? this.hide() : this.show()
                            }, g.prototype.show = function() {
                                var e, t, n, i, r = this;
                                this._isTransitioning || o(this._element).hasClass(l) || (n = i = void 0, this._parent && ((i = o.makeArray(o(h))).length || (i = null)), i && ((n = o(i).data(s)) && n._isTransitioning) || (e = o.Event(a.SHOW), o(this._element).trigger(e), e.isDefaultPrevented() || (i && (g._jQueryInterface.call(o(i), "hide"), n || o(i).data(s, null)), t = this._getDimension(), o(this._element).removeClass(c).addClass(u), this._element.style[t] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && o(this._triggerArray).removeClass(f).attr("aria-expanded", !0), this.setTransitioning(!0), n = function() {
                                    o(r._element).removeClass(u).addClass(c).addClass(l), r._element.style[t] = "", r.setTransitioning(!1), o(r._element).trigger(a.SHOWN)
                                }, _.supportsTransitionEnd() ? (i = "scroll" + (t[0].toUpperCase() + t.slice(1)), o(this._element).one(_.TRANSITION_END, n).emulateTransitionEnd(600), this._element.style[t] = this._element[i] + "px") : n())))
                            }, g.prototype.hide = function() {
                                var e = this;
                                if (!this._isTransitioning && o(this._element).hasClass(l)) {
                                    var t = o.Event(a.HIDE);
                                    if (o(this._element).trigger(t), !t.isDefaultPrevented()) {
                                        var n = this._getDimension();
                                        this._element.style[n] = this._element[n === d ? "offsetWidth" : "offsetHeight"] + "px", _.reflow(this._element), o(this._element).addClass(u).removeClass(c).removeClass(l), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && o(this._triggerArray).addClass(f).attr("aria-expanded", !1), this.setTransitioning(!0);
                                        t = function() {
                                            e.setTransitioning(!1), o(e._element).removeClass(u).addClass(c).trigger(a.HIDDEN)
                                        };
                                        return this._element.style[n] = "", _.supportsTransitionEnd() ? void o(this._element).one(_.TRANSITION_END, t).emulateTransitionEnd(600) : void t()
                                    }
                                }
                            }, g.prototype.setTransitioning = function(e) {
                                this._isTransitioning = e
                            }, g.prototype.dispose = function() {
                                o.removeData(this._element, s), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                            }, g.prototype._getConfig = function(e) {
                                return (e = o.extend({}, r, e)).toggle = Boolean(e.toggle), _.typeCheckConfig(t, e, i), e
                            }, g.prototype._getDimension = function() {
                                return o(this._element).hasClass(d) ? d : p
                            }, g.prototype._getParent = function() {
                                var n = this,
                                    e = o(this._config.parent)[0],
                                    t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                                return o(e).find(t).each(function(e, t) {
                                    n._addAriaAndCollapsedClass(g._getTargetFromElement(t), [t])
                                }), e
                            }, g.prototype._addAriaAndCollapsedClass = function(e, t) {
                                var n;
                                e && (n = o(e).hasClass(l), e.setAttribute("aria-expanded", n), t.length && o(t).toggleClass(f, !n).attr("aria-expanded", n))
                            }, g._getTargetFromElement = function(e) {
                                e = _.getSelectorFromElement(e);
                                return e ? o(e)[0] : null
                            }, g._jQueryInterface = function(i) {
                                return this.each(function() {
                                    var e = o(this),
                                        t = e.data(s),
                                        n = o.extend({}, r, e.data(), "object" === (void 0 === i ? "undefined" : S(i)) && i);
                                    if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || (t = new g(this, n), e.data(s, t)), "string" == typeof i) {
                                        if (void 0 === t[i]) throw new Error('No method named "' + i + '"');
                                        t[i]()
                                    }
                                })
                            }, x(g, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.0.0-alpha.5"
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return r
                                }
                            }]), g);

                        function g(e, t) {
                            w(this, g), this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = o.makeArray(o('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                        }
                        o(document).on(a.CLICK_DATA_API, e, function(e) {
                            e.preventDefault();
                            var t = m._getTargetFromElement(this),
                                e = o(t).data(s) ? "toggle" : o(this).data();
                            m._jQueryInterface.call(o(t), e)
                        }), o.fn[t] = m._jQueryInterface, o.fn[t].Constructor = m, o.fn[t].noConflict = function() {
                            return o.fn[t] = n, m._jQueryInterface
                        }
                    }(jQuery),
                    function(a) {
                        var e = "dropdown",
                            n = "bs.dropdown",
                            t = "." + n,
                            i = ".data-api",
                            r = a.fn[e],
                            l = {
                                HIDE: "hide" + t,
                                HIDDEN: "hidden" + t,
                                SHOW: "show" + t,
                                SHOWN: "shown" + t,
                                CLICK: "click" + t,
                                CLICK_DATA_API: "click" + t + i,
                                KEYDOWN_DATA_API: "keydown" + t + i
                            },
                            o = "dropdown-backdrop",
                            s = "disabled",
                            c = "open",
                            u = ".dropdown-backdrop",
                            f = '[data-toggle="dropdown"]',
                            d = ".dropdown form",
                            p = '[role="menu"]',
                            i = '[role="listbox"]',
                            h = ".navbar-nav",
                            m = '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a',
                            g = (y.prototype.toggle = function() {
                                if (this.disabled || a(this).hasClass(s)) return !1;
                                var e = y._getParentFromElement(this),
                                    t = a(e).hasClass(c);
                                if (y._clearMenus(), t) return !1;
                                "ontouchstart" in document.documentElement && !a(e).closest(h).length && ((n = document.createElement("div")).className = o, a(n).insertBefore(this), a(n).on("click", y._clearMenus));
                                var t = {
                                        relatedTarget: this
                                    },
                                    n = a.Event(l.SHOW, t);
                                return a(e).trigger(n), !n.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", "true"), a(e).toggleClass(c), a(e).trigger(a.Event(l.SHOWN, t)), !1)
                            }, y.prototype.dispose = function() {
                                a.removeData(this._element, n), a(this._element).off(t), this._element = null
                            }, y.prototype._addEventListeners = function() {
                                a(this._element).on(l.CLICK, this.toggle)
                            }, y._jQueryInterface = function(t) {
                                return this.each(function() {
                                    var e = a(this).data(n);
                                    if (e || a(this).data(n, e = new y(this)), "string" == typeof t) {
                                        if (void 0 === e[t]) throw new Error('No method named "' + t + '"');
                                        e[t].call(this)
                                    }
                                })
                            }, y._clearMenus = function(e) {
                                if (!e || 3 !== e.which) {
                                    var t = a(u)[0];
                                    t && t.parentNode.removeChild(t);
                                    for (var n = a.makeArray(a(f)), i = 0; i < n.length; i++) {
                                        var r, o = y._getParentFromElement(n[i]),
                                            s = {
                                                relatedTarget: n[i]
                                            };
                                        !a(o).hasClass(c) || e && "click" === e.type && /input|textarea/i.test(e.target.tagName) && a.contains(o, e.target) || (r = a.Event(l.HIDE, s), a(o).trigger(r), r.isDefaultPrevented() || (n[i].setAttribute("aria-expanded", "false"), a(o).removeClass(c).trigger(a.Event(l.HIDDEN, s))))
                                    }
                                }
                            }, y._getParentFromElement = function(e) {
                                var t = void 0,
                                    n = _.getSelectorFromElement(e);
                                return (t = n ? a(n)[0] : t) || e.parentNode
                            }, y._dataApiKeydownHandler = function(e) {
                                if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !a(this).hasClass(s))) {
                                    var t = y._getParentFromElement(this),
                                        n = a(t).hasClass(c);
                                    if (!n && 27 !== e.which || n && 27 === e.which) return 27 === e.which && (i = a(t).find(f)[0], a(i).trigger("focus")), void a(this).trigger("click");
                                    var i, t = a.makeArray(a(m));
                                    (t = t.filter(function(e) {
                                        return e.offsetWidth || e.offsetHeight
                                    })).length && (i = t.indexOf(e.target), 38 === e.which && 0 < i && i--, 40 === e.which && i < t.length - 1 && i++, t[i = i < 0 ? 0 : i].focus())
                                }
                            }, x(y, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.0.0-alpha.5"
                                }
                            }]), y);

                        function y(e) {
                            w(this, y), this._element = e, this._addEventListeners()
                        }
                        a(document).on(l.KEYDOWN_DATA_API, f, g._dataApiKeydownHandler).on(l.KEYDOWN_DATA_API, p, g._dataApiKeydownHandler).on(l.KEYDOWN_DATA_API, i, g._dataApiKeydownHandler).on(l.CLICK_DATA_API, g._clearMenus).on(l.CLICK_DATA_API, f, g.prototype.toggle).on(l.CLICK_DATA_API, d, function(e) {
                            e.stopPropagation()
                        }), a.fn[e] = g._jQueryInterface, a.fn[e].Constructor = g, a.fn[e].noConflict = function() {
                            return a.fn[e] = r, g._jQueryInterface
                        }
                    }(jQuery),
                    function(o) {
                        var t = "modal",
                            s = "bs.modal",
                            e = "." + s,
                            n = o.fn[t],
                            i = {
                                backdrop: !0,
                                keyboard: !0,
                                focus: !0,
                                show: !0
                            },
                            r = {
                                backdrop: "(boolean|string)",
                                keyboard: "boolean",
                                focus: "boolean",
                                show: "boolean"
                            },
                            a = {
                                HIDE: "hide" + e,
                                HIDDEN: "hidden" + e,
                                SHOW: "show" + e,
                                SHOWN: "shown" + e,
                                FOCUSIN: "focusin" + e,
                                RESIZE: "resize" + e,
                                CLICK_DISMISS: "click.dismiss" + e,
                                KEYDOWN_DISMISS: "keydown.dismiss" + e,
                                MOUSEUP_DISMISS: "mouseup.dismiss" + e,
                                MOUSEDOWN_DISMISS: "mousedown.dismiss" + e,
                                CLICK_DATA_API: "click" + e + ".data-api"
                            },
                            l = "modal-scrollbar-measure",
                            c = "modal-backdrop",
                            u = "modal-open",
                            f = "fade",
                            d = "in",
                            p = {
                                DIALOG: ".modal-dialog",
                                DATA_TOGGLE: '[data-toggle="modal"]',
                                DATA_DISMISS: '[data-dismiss="modal"]',
                                FIXED_CONTENT: ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"
                            },
                            h = (m.prototype.toggle = function(e) {
                                return this._isShown ? this.hide() : this.show(e)
                            }, m.prototype.show = function(e) {
                                var t = this,
                                    n = o.Event(a.SHOW, {
                                        relatedTarget: e
                                    });
                                o(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), o(document.body).addClass(u), this._setEscapeEvent(), this._setResizeEvent(), o(this._element).on(a.CLICK_DISMISS, p.DATA_DISMISS, o.proxy(this.hide, this)), o(this._dialog).on(a.MOUSEDOWN_DISMISS, function() {
                                    o(t._element).one(a.MOUSEUP_DISMISS, function(e) {
                                        o(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                                    })
                                }), this._showBackdrop(o.proxy(this._showElement, this, e)))
                            }, m.prototype.hide = function(e) {
                                e && e.preventDefault();
                                e = o.Event(a.HIDE);
                                o(this._element).trigger(e), this._isShown && !e.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), o(document).off(a.FOCUSIN), o(this._element).removeClass(d), o(this._element).off(a.CLICK_DISMISS), o(this._dialog).off(a.MOUSEDOWN_DISMISS), _.supportsTransitionEnd() && o(this._element).hasClass(f) ? o(this._element).one(_.TRANSITION_END, o.proxy(this._hideModal, this)).emulateTransitionEnd(300) : this._hideModal())
                            }, m.prototype.dispose = function() {
                                o.removeData(this._element, s), o(window).off(e), o(document).off(e), o(this._element).off(e), o(this._backdrop).off(e), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null
                            }, m.prototype._getConfig = function(e) {
                                return e = o.extend({}, i, e), _.typeCheckConfig(t, e, r), e
                            }, m.prototype._showElement = function(e) {
                                var t = this,
                                    n = _.supportsTransitionEnd() && o(this._element).hasClass(f);
                                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && _.reflow(this._element), o(this._element).addClass(d), this._config.focus && this._enforceFocus();
                                var i = o.Event(a.SHOWN, {
                                        relatedTarget: e
                                    }),
                                    e = function() {
                                        t._config.focus && t._element.focus(), o(t._element).trigger(i)
                                    };
                                n ? o(this._dialog).one(_.TRANSITION_END, e).emulateTransitionEnd(300) : e()
                            }, m.prototype._enforceFocus = function() {
                                var t = this;
                                o(document).off(a.FOCUSIN).on(a.FOCUSIN, function(e) {
                                    document === e.target || t._element === e.target || o(t._element).has(e.target).length || t._element.focus()
                                })
                            }, m.prototype._setEscapeEvent = function() {
                                var t = this;
                                this._isShown && this._config.keyboard ? o(this._element).on(a.KEYDOWN_DISMISS, function(e) {
                                    27 === e.which && t.hide()
                                }) : this._isShown || o(this._element).off(a.KEYDOWN_DISMISS)
                            }, m.prototype._setResizeEvent = function() {
                                this._isShown ? o(window).on(a.RESIZE, o.proxy(this._handleUpdate, this)) : o(window).off(a.RESIZE)
                            }, m.prototype._hideModal = function() {
                                var e = this;
                                this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._showBackdrop(function() {
                                    o(document.body).removeClass(u), e._resetAdjustments(), e._resetScrollbar(), o(e._element).trigger(a.HIDDEN)
                                })
                            }, m.prototype._removeBackdrop = function() {
                                this._backdrop && (o(this._backdrop).remove(), this._backdrop = null)
                            }, m.prototype._showBackdrop = function(e) {
                                var t, n = this,
                                    i = o(this._element).hasClass(f) ? f : "";
                                this._isShown && this._config.backdrop ? (t = _.supportsTransitionEnd() && i, this._backdrop = document.createElement("div"), this._backdrop.className = c, i && o(this._backdrop).addClass(i), o(this._backdrop).appendTo(document.body), o(this._element).on(a.CLICK_DISMISS, function(e) {
                                    return n._ignoreBackdropClick ? void(n._ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide()))
                                }), t && _.reflow(this._backdrop), o(this._backdrop).addClass(d), e && (t ? o(this._backdrop).one(_.TRANSITION_END, e).emulateTransitionEnd(150) : e())) : !this._isShown && this._backdrop ? (o(this._backdrop).removeClass(d), t = function() {
                                    n._removeBackdrop(), e && e()
                                }, _.supportsTransitionEnd() && o(this._element).hasClass(f) ? o(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(150) : t()) : e && e()
                            }, m.prototype._handleUpdate = function() {
                                this._adjustDialog()
                            }, m.prototype._adjustDialog = function() {
                                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                            }, m.prototype._resetAdjustments = function() {
                                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                            }, m.prototype._checkScrollbar = function() {
                                this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                            }, m.prototype._setScrollbar = function() {
                                var e = parseInt(o(p.FIXED_CONTENT).css("padding-right") || 0, 10);
                                this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = e + this._scrollbarWidth + "px")
                            }, m.prototype._resetScrollbar = function() {
                                document.body.style.paddingRight = this._originalBodyPadding
                            }, m.prototype._getScrollbarWidth = function() {
                                var e = document.createElement("div");
                                e.className = l, document.body.appendChild(e);
                                var t = e.offsetWidth - e.clientWidth;
                                return document.body.removeChild(e), t
                            }, m._jQueryInterface = function(n, i) {
                                return this.each(function() {
                                    var e = o(this).data(s),
                                        t = o.extend({}, m.Default, o(this).data(), "object" === (void 0 === n ? "undefined" : S(n)) && n);
                                    if (e || (e = new m(this, t), o(this).data(s, e)), "string" == typeof n) {
                                        if (void 0 === e[n]) throw new Error('No method named "' + n + '"');
                                        e[n](i)
                                    } else t.show && e.show(i)
                                })
                            }, x(m, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.0.0-alpha.5"
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return i
                                }
                            }]), m);

                        function m(e, t) {
                            w(this, m), this._config = this._getConfig(t), this._element = e, this._dialog = o(e).find(p.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                        }
                        o(document).on(a.CLICK_DATA_API, p.DATA_TOGGLE, function(e) {
                            var t = this,
                                n = void 0,
                                i = _.getSelectorFromElement(this);
                            i && (n = o(i)[0]);
                            i = o(n).data(s) ? "toggle" : o.extend({}, o(n).data(), o(this).data());
                            "A" === this.tagName && e.preventDefault();
                            var r = o(n).one(a.SHOW, function(e) {
                                e.isDefaultPrevented() || r.one(a.HIDDEN, function() {
                                    o(t).is(":visible") && t.focus()
                                })
                            });
                            h._jQueryInterface.call(o(n), i, this)
                        }), o.fn[t] = h._jQueryInterface, o.fn[t].Constructor = h, o.fn[t].noConflict = function() {
                            return o.fn[t] = n, h._jQueryInterface
                        }
                    }(jQuery),
                    function(r) {
                        var n = "scrollspy",
                            i = "bs.scrollspy",
                            e = "." + i,
                            t = r.fn[n],
                            o = {
                                offset: 10,
                                method: "auto",
                                target: ""
                            },
                            s = {
                                offset: "number",
                                method: "string",
                                target: "(string|element)"
                            },
                            a = {
                                ACTIVATE: "activate" + e,
                                SCROLL: "scroll" + e,
                                LOAD_DATA_API: "load" + e + ".data-api"
                            },
                            l = "dropdown-item",
                            c = "active",
                            u = {
                                DATA_SPY: '[data-spy="scroll"]',
                                ACTIVE: ".active",
                                LIST_ITEM: ".list-item",
                                LI: "li",
                                LI_DROPDOWN: "li.dropdown",
                                NAV_LINKS: ".nav-link",
                                DROPDOWN: ".dropdown",
                                DROPDOWN_ITEMS: ".dropdown-item",
                                DROPDOWN_TOGGLE: ".dropdown-toggle"
                            },
                            f = "offset",
                            d = "position",
                            p = (h.prototype.refresh = function() {
                                var t = this,
                                    e = this._scrollElement !== this._scrollElement.window ? d : f,
                                    n = "auto" === this._config.method ? e : this._config.method,
                                    i = n === d ? this._getScrollTop() : 0;
                                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), r.makeArray(r(this._selector)).map(function(e) {
                                    var t = void 0,
                                        e = _.getSelectorFromElement(e);
                                    return (t = e ? r(e)[0] : t) && (t.offsetWidth || t.offsetHeight) ? [r(t)[n]().top + i, e] : null
                                }).filter(function(e) {
                                    return e
                                }).sort(function(e, t) {
                                    return e[0] - t[0]
                                }).forEach(function(e) {
                                    t._offsets.push(e[0]), t._targets.push(e[1])
                                })
                            }, h.prototype.dispose = function() {
                                r.removeData(this._element, i), r(this._scrollElement).off(e), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                            }, h.prototype._getConfig = function(e) {
                                var t;
                                return "string" != typeof(e = r.extend({}, o, e)).target && ((t = r(e.target).attr("id")) || (t = _.getUID(n), r(e.target).attr("id", t)), e.target = "#" + t), _.typeCheckConfig(n, e, s), e
                            }, h.prototype._getScrollTop = function() {
                                return this._scrollElement === window ? this._scrollElement.scrollY : this._scrollElement.scrollTop
                            }, h.prototype._getScrollHeight = function() {
                                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                            }, h.prototype._process = function() {
                                var e = this._getScrollTop() + this._config.offset,
                                    t = this._getScrollHeight(),
                                    n = this._config.offset + t - this._scrollElement.offsetHeight;
                                if (this._scrollHeight !== t && this.refresh(), n <= e && (n = this._targets[this._targets.length - 1], this._activeTarget !== n && this._activate(n)), this._activeTarget && e < this._offsets[0]) return this._activeTarget = null, void this._clear();
                                for (var i = this._offsets.length; i--;) this._activeTarget !== this._targets[i] && e >= this._offsets[i] && (void 0 === this._offsets[i + 1] || e < this._offsets[i + 1]) && this._activate(this._targets[i])
                            }, h.prototype._activate = function(t) {
                                this._activeTarget = t, this._clear();
                                var e = (e = this._selector.split(",")).map(function(e) {
                                        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                                    }),
                                    e = r(e.join(","));
                                e.hasClass(l) ? (e.closest(u.DROPDOWN).find(u.DROPDOWN_TOGGLE).addClass(c), e.addClass(c)) : e.parents(u.LI).find(u.NAV_LINKS).addClass(c), r(this._scrollElement).trigger(a.ACTIVATE, {
                                    relatedTarget: t
                                })
                            }, h.prototype._clear = function() {
                                r(this._selector).filter(u.ACTIVE).removeClass(c)
                            }, h._jQueryInterface = function(n) {
                                return this.each(function() {
                                    var e = r(this).data(i),
                                        t = "object" === (void 0 === n ? "undefined" : S(n)) && n || null;
                                    if (e || (e = new h(this, t), r(this).data(i, e)), "string" == typeof n) {
                                        if (void 0 === e[n]) throw new Error('No method named "' + n + '"');
                                        e[n]()
                                    }
                                })
                            }, x(h, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.0.0-alpha.5"
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return o
                                }
                            }]), h);

                        function h(e, t) {
                            w(this, h), this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + u.NAV_LINKS + "," + this._config.target + " " + u.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, r(this._scrollElement).on(a.SCROLL, r.proxy(this._process, this)), this.refresh(), this._process()
                        }
                        r(window).on(a.LOAD_DATA_API, function() {
                            for (var e = r.makeArray(r(u.DATA_SPY)), t = e.length; t--;) {
                                var n = r(e[t]);
                                p._jQueryInterface.call(n, n.data())
                            }
                        }), r.fn[n] = p._jQueryInterface, r.fn[n].Constructor = p, r.fn[n].noConflict = function() {
                            return r.fn[n] = t, p._jQueryInterface
                        }
                    }(jQuery),
                    function(a) {
                        var i = "bs.tab",
                            e = "." + i,
                            t = a.fn.tab,
                            l = {
                                HIDE: "hide" + e,
                                HIDDEN: "hidden" + e,
                                SHOW: "show" + e,
                                SHOWN: "shown" + e,
                                CLICK_DATA_API: "click" + e + ".data-api"
                            },
                            o = "dropdown-menu",
                            c = "active",
                            s = "fade",
                            u = "in",
                            f = ".dropdown",
                            d = "ul:not(.dropdown-menu)",
                            r = "> .nav-item .fade, > .fade",
                            p = ".active",
                            h = "> .nav-item > .active, > .active",
                            e = '[data-toggle="tab"], [data-toggle="pill"]',
                            m = ".dropdown-toggle",
                            g = "> .dropdown-menu .active",
                            n = (y.prototype.show = function() {
                                var e, n, t, i, r, o, s = this;
                                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && a(this._element).hasClass(c) || (n = e = void 0, o = a(this._element).closest(d)[0], t = _.getSelectorFromElement(this._element), o && (n = (n = a.makeArray(a(o).find(p)))[n.length - 1]), i = a.Event(l.HIDE, {
                                    relatedTarget: this._element
                                }), r = a.Event(l.SHOW, {
                                    relatedTarget: n
                                }), n && a(n).trigger(i), a(this._element).trigger(r), r.isDefaultPrevented() || i.isDefaultPrevented() || (t && (e = a(t)[0]), this._activate(this._element, o), o = function() {
                                    var e = a.Event(l.HIDDEN, {
                                            relatedTarget: s._element
                                        }),
                                        t = a.Event(l.SHOWN, {
                                            relatedTarget: n
                                        });
                                    a(n).trigger(e), a(s._element).trigger(t)
                                }, e ? this._activate(e, e.parentNode, o) : o()))
                            }, y.prototype.dispose = function() {
                                a.removeClass(this._element, i), this._element = null
                            }, y.prototype._activate = function(e, t, n) {
                                var i = a(t).find(h)[0],
                                    t = n && _.supportsTransitionEnd() && (i && a(i).hasClass(s) || Boolean(a(t).find(r)[0])),
                                    n = a.proxy(this._transitionComplete, this, e, i, t, n);
                                i && t ? a(i).one(_.TRANSITION_END, n).emulateTransitionEnd(150) : n(), i && a(i).removeClass(u)
                            }, y.prototype._transitionComplete = function(e, t, n, i) {
                                var r;
                                t && (a(t).removeClass(c), (r = a(t).find(g)[0]) && a(r).removeClass(c), t.setAttribute("aria-expanded", !1)), a(e).addClass(c), e.setAttribute("aria-expanded", !0), n ? (_.reflow(e), a(e).addClass(u)) : a(e).removeClass(s), e.parentNode && a(e.parentNode).hasClass(o) && ((n = a(e).closest(f)[0]) && a(n).find(m).addClass(c), e.setAttribute("aria-expanded", !0)), i && i()
                            }, y._jQueryInterface = function(n) {
                                return this.each(function() {
                                    var e = a(this),
                                        t = e.data(i);
                                    if (t || (t = new y(this), e.data(i, t)), "string" == typeof n) {
                                        if (void 0 === t[n]) throw new Error('No method named "' + n + '"');
                                        t[n]()
                                    }
                                })
                            }, x(y, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.0.0-alpha.5"
                                }
                            }]), y);

                        function y(e) {
                            w(this, y), this._element = e
                        }
                        a(document).on(l.CLICK_DATA_API, e, function(e) {
                            e.preventDefault(), n._jQueryInterface.call(a(this), "show")
                        }), a.fn.tab = n._jQueryInterface, a.fn.tab.Constructor = n, a.fn.tab.noConflict = function() {
                            return a.fn.tab = t, n._jQueryInterface
                        }
                    }(jQuery), g = function(o) {
                        if (void 0 === window.Tether) throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
                        var t = "tooltip",
                            i = "bs.tooltip",
                            e = "." + i,
                            n = o.fn[t],
                            r = {
                                animation: !0,
                                template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
                                trigger: "hover focus",
                                title: "",
                                delay: 0,
                                html: !1,
                                selector: !1,
                                placement: "top",
                                offset: "0 0",
                                constraints: []
                            },
                            s = {
                                animation: "boolean",
                                template: "string",
                                title: "(string|element|function)",
                                trigger: "string",
                                delay: "(number|object)",
                                html: "boolean",
                                selector: "(string|boolean)",
                                placement: "(string|function)",
                                offset: "string",
                                constraints: "array"
                            },
                            a = {
                                TOP: "bottom center",
                                RIGHT: "middle left",
                                BOTTOM: "top center",
                                LEFT: "middle right"
                            },
                            l = "in",
                            c = "out",
                            u = {
                                HIDE: "hide" + e,
                                HIDDEN: "hidden" + e,
                                SHOW: "show" + e,
                                SHOWN: "shown" + e,
                                INSERTED: "inserted" + e,
                                CLICK: "click" + e,
                                FOCUSIN: "focusin" + e,
                                FOCUSOUT: "focusout" + e,
                                MOUSEENTER: "mouseenter" + e,
                                MOUSELEAVE: "mouseleave" + e
                            },
                            f = "fade",
                            d = "in",
                            p = ".tooltip-inner",
                            h = {
                                element: !1,
                                enabled: !1
                            },
                            m = "hover",
                            g = "focus",
                            y = "manual",
                            v = (b.prototype.enable = function() {
                                this._isEnabled = !0
                            }, b.prototype.disable = function() {
                                this._isEnabled = !1
                            }, b.prototype.toggleEnabled = function() {
                                this._isEnabled = !this._isEnabled
                            }, b.prototype.toggle = function(e) {
                                var t, n;
                                e ? (t = this.constructor.DATA_KEY, (n = o(e.currentTarget).data(t)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), o(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)) : o(this.getTipElement()).hasClass(d) ? this._leave(null, this) : this._enter(null, this)
                            }, b.prototype.dispose = function() {
                                clearTimeout(this._timeout), this.cleanupTether(), o.removeData(this.element, this.constructor.DATA_KEY), o(this.element).off(this.constructor.EVENT_KEY), this.tip && o(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null
                            }, b.prototype.show = function() {
                                var e, t = this,
                                    n = o.Event(this.constructor.Event.SHOW);
                                this.isWithContent() && this._isEnabled && (o(this.element).trigger(n), e = o.contains(this.element.ownerDocument.documentElement, this.element), !n.isDefaultPrevented() && e && (n = this.getTipElement(), e = _.getUID(this.constructor.NAME), n.setAttribute("id", e), this.element.setAttribute("aria-describedby", e), this.setContent(), this.config.animation && o(n).addClass(f), e = "function" == typeof this.config.placement ? this.config.placement.call(this, n, this.element) : this.config.placement, e = this._getAttachment(e), o(n).data(this.constructor.DATA_KEY, this).appendTo(document.body), o(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({
                                    attachment: e,
                                    element: n,
                                    target: this.element,
                                    classes: h,
                                    classPrefix: "bs-tether",
                                    offset: this.config.offset,
                                    constraints: this.config.constraints,
                                    addTargetClasses: !1
                                }), _.reflow(n), this._tether.position(), o(n).addClass(d), n = function() {
                                    var e = t._hoverState;
                                    t._hoverState = null, o(t.element).trigger(t.constructor.Event.SHOWN), e === c && t._leave(null, t)
                                }, _.supportsTransitionEnd() && o(this.tip).hasClass(f) ? o(this.tip).one(_.TRANSITION_END, n).emulateTransitionEnd(b._TRANSITION_DURATION) : n()))
                            }, b.prototype.hide = function(e) {
                                function t() {
                                    n._hoverState !== l && i.parentNode && i.parentNode.removeChild(i), n.element.removeAttribute("aria-describedby"), o(n.element).trigger(n.constructor.Event.HIDDEN), n.cleanupTether(), e && e()
                                }
                                var n = this,
                                    i = this.getTipElement(),
                                    r = o.Event(this.constructor.Event.HIDE);
                                o(this.element).trigger(r), r.isDefaultPrevented() || (o(i).removeClass(d), _.supportsTransitionEnd() && o(this.tip).hasClass(f) ? o(i).one(_.TRANSITION_END, t).emulateTransitionEnd(150) : t(), this._hoverState = "")
                            }, b.prototype.isWithContent = function() {
                                return Boolean(this.getTitle())
                            }, b.prototype.getTipElement = function() {
                                return this.tip = this.tip || o(this.config.template)[0]
                            }, b.prototype.setContent = function() {
                                var e = o(this.getTipElement());
                                this.setElementContent(e.find(p), this.getTitle()), e.removeClass(f).removeClass(d), this.cleanupTether()
                            }, b.prototype.setElementContent = function(e, t) {
                                var n = this.config.html;
                                "object" === (void 0 === t ? "undefined" : S(t)) && (t.nodeType || t.jquery) ? n ? o(t).parent().is(e) || e.empty().append(t) : e.text(o(t).text()): e[n ? "html" : "text"](t)
                            }, b.prototype.getTitle = function() {
                                return this.element.getAttribute("data-original-title") || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
                            }, b.prototype.cleanupTether = function() {
                                this._tether && this._tether.destroy()
                            }, b.prototype._getAttachment = function(e) {
                                return a[e.toUpperCase()]
                            }, b.prototype._setListeners = function() {
                                var n = this;
                                this.config.trigger.split(" ").forEach(function(e) {
                                    var t;
                                    "click" === e ? o(n.element).on(n.constructor.Event.CLICK, n.config.selector, o.proxy(n.toggle, n)) : e !== y && (t = e === m ? n.constructor.Event.MOUSEENTER : n.constructor.Event.FOCUSIN, e = e === m ? n.constructor.Event.MOUSELEAVE : n.constructor.Event.FOCUSOUT, o(n.element).on(t, n.config.selector, o.proxy(n._enter, n)).on(e, n.config.selector, o.proxy(n._leave, n)))
                                }), this.config.selector ? this.config = o.extend({}, this.config, {
                                    trigger: "manual",
                                    selector: ""
                                }) : this._fixTitle()
                            }, b.prototype._fixTitle = function() {
                                var e = S(this.element.getAttribute("data-original-title"));
                                !this.element.getAttribute("title") && "string" === e || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                            }, b.prototype._enter = function(e, t) {
                                var n = this.constructor.DATA_KEY;
                                return (t = t || o(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), o(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? g : m] = !0), o(t.getTipElement()).hasClass(d) || t._hoverState === l ? void(t._hoverState = l) : (clearTimeout(t._timeout), t._hoverState = l, t.config.delay && t.config.delay.show ? void(t._timeout = setTimeout(function() {
                                    t._hoverState === l && t.show()
                                }, t.config.delay.show)) : void t.show())
                            }, b.prototype._leave = function(e, t) {
                                var n = this.constructor.DATA_KEY;
                                if ((t = t || o(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), o(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? g : m] = !1), !t._isWithActiveTrigger()) return clearTimeout(t._timeout), t._hoverState = c, t.config.delay && t.config.delay.hide ? void(t._timeout = setTimeout(function() {
                                    t._hoverState === c && t.hide()
                                }, t.config.delay.hide)) : void t.hide()
                            }, b.prototype._isWithActiveTrigger = function() {
                                for (var e in this._activeTrigger)
                                    if (this._activeTrigger[e]) return !0;
                                return !1
                            }, b.prototype._getConfig = function(e) {
                                return (e = o.extend({}, this.constructor.Default, o(this.element).data(), e)).delay && "number" == typeof e.delay && (e.delay = {
                                    show: e.delay,
                                    hide: e.delay
                                }), _.typeCheckConfig(t, e, this.constructor.DefaultType), e
                            }, b.prototype._getDelegateConfig = function() {
                                var e = {};
                                if (this.config)
                                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                                return e
                            }, b._jQueryInterface = function(n) {
                                return this.each(function() {
                                    var e = o(this).data(i),
                                        t = "object" === (void 0 === n ? "undefined" : S(n)) ? n : null;
                                    if ((e || !/dispose|hide/.test(n)) && (e || (e = new b(this, t), o(this).data(i, e)), "string" == typeof n)) {
                                        if (void 0 === e[n]) throw new Error('No method named "' + n + '"');
                                        e[n]()
                                    }
                                })
                            }, x(b, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.0.0-alpha.5"
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return r
                                }
                            }, {
                                key: "NAME",
                                get: function() {
                                    return t
                                }
                            }, {
                                key: "DATA_KEY",
                                get: function() {
                                    return i
                                }
                            }, {
                                key: "Event",
                                get: function() {
                                    return u
                                }
                            }, {
                                key: "EVENT_KEY",
                                get: function() {
                                    return e
                                }
                            }, {
                                key: "DefaultType",
                                get: function() {
                                    return s
                                }
                            }]), b);

                        function b(e, t) {
                            w(this, b), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._tether = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                        }
                        return o.fn[t] = v._jQueryInterface, o.fn[t].Constructor = v, o.fn[t].noConflict = function() {
                            return o.fn[t] = n, v._jQueryInterface
                        }, v
                    }(jQuery),
                    function(i) {
                        var e, t = "popover",
                            r = "bs.popover",
                            n = "." + r,
                            o = i.fn[t],
                            s = i.extend({}, g.Default, {
                                placement: "right",
                                trigger: "click",
                                content: "",
                                template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
                            }),
                            a = i.extend({}, g.DefaultType, {
                                content: "(string|element|function)"
                            }),
                            l = "fade",
                            c = "in",
                            u = ".popover-title",
                            f = ".popover-content",
                            d = {
                                HIDE: "hide" + n,
                                HIDDEN: "hidden" + n,
                                SHOW: "show" + n,
                                SHOWN: "shown" + n,
                                INSERTED: "inserted" + n,
                                CLICK: "click" + n,
                                FOCUSIN: "focusin" + n,
                                FOCUSOUT: "focusout" + n,
                                MOUSEENTER: "mouseenter" + n,
                                MOUSELEAVE: "mouseleave" + n
                            },
                            p = (function(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + m(t));
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                            }(h, e = g), h.prototype.isWithContent = function() {
                                return this.getTitle() || this._getContent()
                            }, h.prototype.getTipElement = function() {
                                return this.tip = this.tip || i(this.config.template)[0]
                            }, h.prototype.setContent = function() {
                                var e = i(this.getTipElement());
                                this.setElementContent(e.find(u), this.getTitle()), this.setElementContent(e.find(f), this._getContent()), e.removeClass(l).removeClass(c), this.cleanupTether()
                            }, h.prototype._getContent = function() {
                                return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
                            }, h._jQueryInterface = function(n) {
                                return this.each(function() {
                                    var e = i(this).data(r),
                                        t = "object" === (void 0 === n ? "undefined" : S(n)) ? n : null;
                                    if ((e || !/destroy|hide/.test(n)) && (e || (e = new h(this, t), i(this).data(r, e)), "string" == typeof n)) {
                                        if (void 0 === e[n]) throw new Error('No method named "' + n + '"');
                                        e[n]()
                                    }
                                })
                            }, x(h, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.0.0-alpha.5"
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return s
                                }
                            }, {
                                key: "NAME",
                                get: function() {
                                    return t
                                }
                            }, {
                                key: "DATA_KEY",
                                get: function() {
                                    return r
                                }
                            }, {
                                key: "Event",
                                get: function() {
                                    return d
                                }
                            }, {
                                key: "EVENT_KEY",
                                get: function() {
                                    return n
                                }
                            }, {
                                key: "DefaultType",
                                get: function() {
                                    return a
                                }
                            }]), h);

                        function h() {
                            return w(this, h),
                                function(e, t) {
                                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !t || "object" != m(t) && "function" != typeof t ? e : t
                                }(this, e.apply(this, arguments))
                        }
                        i.fn[t] = p._jQueryInterface, i.fn[t].Constructor = p, i.fn[t].noConflict = function() {
                            return i.fn[t] = o, p._jQueryInterface
                        }
                    }(jQuery)
            },
            291: function(e) {
                function t(e) {
                    return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function i() {
                    this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
                }

                function l(e) {
                    return "function" == typeof e
                }

                function c(e) {
                    return "object" === t(e) && null !== e
                }

                function u(e) {
                    return void 0 === e
                }((e.exports = i).EventEmitter = i).prototype._events = void 0, i.prototype._maxListeners = void 0, i.defaultMaxListeners = 10, i.prototype.setMaxListeners = function(e) {
                    if ("number" != typeof e || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
                    return this._maxListeners = e, this
                }, i.prototype.emit = function(e) {
                    var t, n, i, r, o, s;
                    if (this._events || (this._events = {}), "error" === e && (!this._events.error || c(this._events.error) && !this._events.error.length)) {
                        if ((t = arguments[1]) instanceof Error) throw t;
                        var a = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                        throw a.context = t, a
                    }
                    if (u(n = this._events[e])) return !1;
                    if (l(n)) switch (arguments.length) {
                        case 1:
                            n.call(this);
                            break;
                        case 2:
                            n.call(this, arguments[1]);
                            break;
                        case 3:
                            n.call(this, arguments[1], arguments[2]);
                            break;
                        default:
                            r = Array.prototype.slice.call(arguments, 1), n.apply(this, r)
                    } else if (c(n))
                        for (r = Array.prototype.slice.call(arguments, 1), i = (s = n.slice()).length, o = 0; o < i; o++) s[o].apply(this, r);
                    return !0
                }, i.prototype.on = i.prototype.addListener = function(e, t) {
                    var n;
                    if (!l(t)) throw TypeError("listener must be a function");
                    return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, l(t.listener) ? t.listener : t), this._events[e] ? c(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, c(this._events[e]) && !this._events[e].warned && (n = u(this._maxListeners) ? i.defaultMaxListeners : this._maxListeners) && 0 < n && this._events[e].length > n && (this._events[e].warned = !0, console.trace), this
                }, i.prototype.once = function(e, t) {
                    if (!l(t)) throw TypeError("listener must be a function");
                    var n = !1;

                    function i() {
                        this.removeListener(e, i), n || (n = !0, t.apply(this, arguments))
                    }
                    return i.listener = t, this.on(e, i), this
                }, i.prototype.removeListener = function(e, t) {
                    var n, i, r, o;
                    if (!l(t)) throw TypeError("listener must be a function");
                    if (!this._events || !this._events[e]) return this;
                    if (r = (n = this._events[e]).length, i = -1, n === t || l(n.listener) && n.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
                    else if (c(n)) {
                        for (o = r; 0 < o--;)
                            if (n[o] === t || n[o].listener && n[o].listener === t) {
                                i = o;
                                break
                            } if (i < 0) return this;
                        1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(i, 1), this._events.removeListener && this.emit("removeListener", e, t)
                    }
                    return this
                }, i.prototype.removeAllListeners = function(e) {
                    var t, n;
                    if (!this._events) return this;
                    if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
                    if (0 === arguments.length) {
                        for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                        return this.removeAllListeners("removeListener"), this._events = {}, this
                    }
                    if (l(n = this._events[e])) this.removeListener(e, n);
                    else if (n)
                        for (; n.length;) this.removeListener(e, n[n.length - 1]);
                    return delete this._events[e], this
                }, i.prototype.listeners = function(e) {
                    e = this._events && this._events[e] ? l(this._events[e]) ? [this._events[e]] : this._events[e].slice() : [];
                    return e
                }, i.prototype.listenerCount = function(e) {
                    if (this._events) {
                        e = this._events[e];
                        if (l(e)) return 1;
                        if (e) return e.length
                    }
                    return 0
                }, i.listenerCount = function(e, t) {
                    return e.listenerCount(t)
                }
            },
            144: function(e, t) {
                var n;

                function i(e) {
                    return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                n = function() {
                    return function i(r, o, s) {
                        function a(n, e) {
                            if (!o[n]) {
                                if (!r[n]) {
                                    if (0, l) return l(n, !0);
                                    var t = new Error("Cannot find module '" + n + "'");
                                    throw t.code = "MODULE_NOT_FOUND", t
                                }
                                t = o[n] = {
                                    exports: {}
                                };
                                r[n][0].call(t.exports, function(e) {
                                    var t = r[n][1][e];
                                    return a(t || e)
                                }, t, t.exports, i, r, o, s)
                            }
                            return o[n].exports
                        }
                        for (var l = void 0, e = 0; e < s.length; e++) a(s[e]);
                        return a
                    }({
                        1: [function(e, t, n) {
                            t.exports = function(e) {
                                var t, n, i, r = -1;
                                if (1 < e.lines.length && "flex-start" === e.style.alignContent)
                                    for (t = 0; i = e.lines[++r];) i.crossStart = t, t += i.cross;
                                else if (1 < e.lines.length && "flex-end" === e.style.alignContent)
                                    for (t = e.flexStyle.crossSpace; i = e.lines[++r];) i.crossStart = t, t += i.cross;
                                else if (1 < e.lines.length && "center" === e.style.alignContent)
                                    for (t = e.flexStyle.crossSpace / 2; i = e.lines[++r];) i.crossStart = t, t += i.cross;
                                else if (1 < e.lines.length && "space-between" === e.style.alignContent)
                                    for (n = e.flexStyle.crossSpace / (e.lines.length - 1), t = 0; i = e.lines[++r];) i.crossStart = t, t += i.cross + n;
                                else if (1 < e.lines.length && "space-around" === e.style.alignContent)
                                    for (t = (n = 2 * e.flexStyle.crossSpace / (2 * e.lines.length)) / 2; i = e.lines[++r];) i.crossStart = t, t += i.cross + n;
                                else
                                    for (n = e.flexStyle.crossSpace / e.lines.length, t = e.flexStyle.crossInnerBefore; i = e.lines[++r];) i.crossStart = t, i.cross += n, t += i.cross
                            }
                        }, {}],
                        2: [function(e, t, n) {
                            t.exports = function(e) {
                                for (var t, n = -1; line = e.lines[++n];)
                                    for (t = -1; child = line.children[++t];) {
                                        var i = child.style.alignSelf;
                                        "flex-start" === (i = "auto" === i ? e.style.alignItems : i) ? child.flexStyle.crossStart = line.crossStart: "flex-end" === i ? child.flexStyle.crossStart = line.crossStart + line.cross - child.flexStyle.crossOuter : "center" === i ? child.flexStyle.crossStart = line.crossStart + (line.cross - child.flexStyle.crossOuter) / 2 : (child.flexStyle.crossStart = line.crossStart, child.flexStyle.crossOuter = line.cross, child.flexStyle.cross = child.flexStyle.crossOuter - child.flexStyle.crossBefore - child.flexStyle.crossAfter)
                                    }
                            }
                        }, {}],
                        3: [function(e, t, n) {
                            t.exports = function(e, t) {
                                var n = "row" === t || "row-reverse" === t,
                                    i = e.mainAxis;
                                i ? n && "inline" === i || !n && "block" === i || (e.flexStyle = {
                                    main: e.flexStyle.cross,
                                    cross: e.flexStyle.main,
                                    mainOffset: e.flexStyle.crossOffset,
                                    crossOffset: e.flexStyle.mainOffset,
                                    mainBefore: e.flexStyle.crossBefore,
                                    mainAfter: e.flexStyle.crossAfter,
                                    crossBefore: e.flexStyle.mainBefore,
                                    crossAfter: e.flexStyle.mainAfter,
                                    mainInnerBefore: e.flexStyle.crossInnerBefore,
                                    mainInnerAfter: e.flexStyle.crossInnerAfter,
                                    crossInnerBefore: e.flexStyle.mainInnerBefore,
                                    crossInnerAfter: e.flexStyle.mainInnerAfter,
                                    mainBorderBefore: e.flexStyle.crossBorderBefore,
                                    mainBorderAfter: e.flexStyle.crossBorderAfter,
                                    crossBorderBefore: e.flexStyle.mainBorderBefore,
                                    crossBorderAfter: e.flexStyle.mainBorderAfter
                                }) : (e.flexStyle = n ? {
                                    main: e.style.width,
                                    cross: e.style.height,
                                    mainOffset: e.style.offsetWidth,
                                    crossOffset: e.style.offsetHeight,
                                    mainBefore: e.style.marginLeft,
                                    mainAfter: e.style.marginRight,
                                    crossBefore: e.style.marginTop,
                                    crossAfter: e.style.marginBottom,
                                    mainInnerBefore: e.style.paddingLeft,
                                    mainInnerAfter: e.style.paddingRight,
                                    crossInnerBefore: e.style.paddingTop,
                                    crossInnerAfter: e.style.paddingBottom,
                                    mainBorderBefore: e.style.borderLeftWidth,
                                    mainBorderAfter: e.style.borderRightWidth,
                                    crossBorderBefore: e.style.borderTopWidth,
                                    crossBorderAfter: e.style.borderBottomWidth
                                } : {
                                    main: e.style.height,
                                    cross: e.style.width,
                                    mainOffset: e.style.offsetHeight,
                                    crossOffset: e.style.offsetWidth,
                                    mainBefore: e.style.marginTop,
                                    mainAfter: e.style.marginBottom,
                                    crossBefore: e.style.marginLeft,
                                    crossAfter: e.style.marginRight,
                                    mainInnerBefore: e.style.paddingTop,
                                    mainInnerAfter: e.style.paddingBottom,
                                    crossInnerBefore: e.style.paddingLeft,
                                    crossInnerAfter: e.style.paddingRight,
                                    mainBorderBefore: e.style.borderTopWidth,
                                    mainBorderAfter: e.style.borderBottomWidth,
                                    crossBorderBefore: e.style.borderLeftWidth,
                                    crossBorderAfter: e.style.borderRightWidth
                                }, "content-box" === e.style.boxSizing && ("number" == typeof e.flexStyle.main && (e.flexStyle.main += e.flexStyle.mainInnerBefore + e.flexStyle.mainInnerAfter + e.flexStyle.mainBorderBefore + e.flexStyle.mainBorderAfter), "number" == typeof e.flexStyle.cross && (e.flexStyle.cross += e.flexStyle.crossInnerBefore + e.flexStyle.crossInnerAfter + e.flexStyle.crossBorderBefore + e.flexStyle.crossBorderAfter))), e.mainAxis = n ? "inline" : "block", e.crossAxis = n ? "block" : "inline", "number" == typeof e.style.flexBasis && (e.flexStyle.main = e.style.flexBasis + e.flexStyle.mainInnerBefore + e.flexStyle.mainInnerAfter + e.flexStyle.mainBorderBefore + e.flexStyle.mainBorderAfter), e.flexStyle.mainOuter = e.flexStyle.main, e.flexStyle.crossOuter = e.flexStyle.cross, "auto" === e.flexStyle.mainOuter && (e.flexStyle.mainOuter = e.flexStyle.mainOffset), "auto" === e.flexStyle.crossOuter && (e.flexStyle.crossOuter = e.flexStyle.crossOffset), "number" == typeof e.flexStyle.mainBefore && (e.flexStyle.mainOuter += e.flexStyle.mainBefore), "number" == typeof e.flexStyle.mainAfter && (e.flexStyle.mainOuter += e.flexStyle.mainAfter), "number" == typeof e.flexStyle.crossBefore && (e.flexStyle.crossOuter += e.flexStyle.crossBefore), "number" == typeof e.flexStyle.crossAfter && (e.flexStyle.crossOuter += e.flexStyle.crossAfter)
                            }
                        }, {}],
                        4: [function(e, t, n) {
                            var r = e("../reduce");
                            t.exports = function(n) {
                                var i;
                                0 < n.mainSpace && (0 < (i = r(n.children, function(e, t) {
                                    return e + parseFloat(t.style.flexGrow)
                                }, 0)) && (n.main = r(n.children, function(e, t) {
                                    return "auto" === t.flexStyle.main ? t.flexStyle.main = t.flexStyle.mainOffset + parseFloat(t.style.flexGrow) / i * n.mainSpace : t.flexStyle.main += parseFloat(t.style.flexGrow) / i * n.mainSpace, t.flexStyle.mainOuter = t.flexStyle.main + t.flexStyle.mainBefore + t.flexStyle.mainAfter, e + t.flexStyle.mainOuter
                                }, 0), n.mainSpace = 0))
                            }
                        }, {
                            "../reduce": 12
                        }],
                        5: [function(e, t, n) {
                            var r = e("../reduce");
                            t.exports = function(n) {
                                var i;
                                n.mainSpace < 0 && (0 < (i = r(n.children, function(e, t) {
                                    return e + parseFloat(t.style.flexShrink)
                                }, 0)) && (n.main = r(n.children, function(e, t) {
                                    return t.flexStyle.main += parseFloat(t.style.flexShrink) / i * n.mainSpace, t.flexStyle.mainOuter = t.flexStyle.main + t.flexStyle.mainBefore + t.flexStyle.mainAfter, e + t.flexStyle.mainOuter
                                }, 0), n.mainSpace = 0))
                            }
                        }, {
                            "../reduce": 12
                        }],
                        6: [function(e, t, n) {
                            var r = e("../reduce");
                            t.exports = function(e) {
                                var t;
                                e.lines = [t = {
                                    main: 0,
                                    cross: 0,
                                    children: []
                                }];
                                for (var n, i = -1; n = e.children[++i];) "nowrap" === e.style.flexWrap || 0 === t.children.length || "auto" === e.flexStyle.main || e.flexStyle.main - e.flexStyle.mainInnerBefore - e.flexStyle.mainInnerAfter - e.flexStyle.mainBorderBefore - e.flexStyle.mainBorderAfter >= t.main + n.flexStyle.mainOuter ? (t.main += n.flexStyle.mainOuter, t.cross = Math.max(t.cross, n.flexStyle.crossOuter)) : e.lines.push(t = {
                                    main: n.flexStyle.mainOuter,
                                    cross: n.flexStyle.crossOuter,
                                    children: []
                                }), t.children.push(n);
                                e.flexStyle.mainLines = r(e.lines, function(e, t) {
                                    return Math.max(e, t.main)
                                }, 0), e.flexStyle.crossLines = r(e.lines, function(e, t) {
                                    return e + t.cross
                                }, 0), "auto" === e.flexStyle.main && (e.flexStyle.main = Math.max(e.flexStyle.mainOffset, e.flexStyle.mainLines + e.flexStyle.mainInnerBefore + e.flexStyle.mainInnerAfter + e.flexStyle.mainBorderBefore + e.flexStyle.mainBorderAfter)), "auto" === e.flexStyle.cross && (e.flexStyle.cross = Math.max(e.flexStyle.crossOffset, e.flexStyle.crossLines + e.flexStyle.crossInnerBefore + e.flexStyle.crossInnerAfter + e.flexStyle.crossBorderBefore + e.flexStyle.crossBorderAfter)), e.flexStyle.crossSpace = e.flexStyle.cross - e.flexStyle.crossInnerBefore - e.flexStyle.crossInnerAfter - e.flexStyle.crossBorderBefore - e.flexStyle.crossBorderAfter - e.flexStyle.crossLines, e.flexStyle.mainOuter = e.flexStyle.main + e.flexStyle.mainBefore + e.flexStyle.mainAfter, e.flexStyle.crossOuter = e.flexStyle.cross + e.flexStyle.crossBefore + e.flexStyle.crossAfter
                            }
                        }, {
                            "../reduce": 12
                        }],
                        7: [function(r, e, t) {
                            e.exports = function(e) {
                                for (var t, n, i = -1; t = e.children[++i];) r("./flex-direction")(t, e.style.flexDirection);
                                for (r("./flex-direction")(e, e.style.flexDirection), r("./order")(e), r("./flexbox-lines")(e), r("./align-content")(e), i = -1; n = e.lines[++i];) n.mainSpace = e.flexStyle.main - e.flexStyle.mainInnerBefore - e.flexStyle.mainInnerAfter - e.flexStyle.mainBorderBefore - e.flexStyle.mainBorderAfter - n.main, r("./flex-grow")(n), r("./flex-shrink")(n), r("./margin-main")(n), r("./margin-cross")(n), r("./justify-content")(n, e.style.justifyContent, e);
                                r("./align-items")(e)
                            }
                        }, {
                            "./align-content": 1,
                            "./align-items": 2,
                            "./flex-direction": 3,
                            "./flex-grow": 4,
                            "./flex-shrink": 5,
                            "./flexbox-lines": 6,
                            "./justify-content": 8,
                            "./margin-cross": 9,
                            "./margin-main": 10,
                            "./order": 11
                        }],
                        8: [function(e, t, n) {
                            t.exports = function(e, t, n) {
                                var i, r, o, n = n.flexStyle.mainInnerBefore,
                                    s = -1;
                                if ("flex-end" === t)
                                    for (i = e.mainSpace, i += n; o = e.children[++s];) o.flexStyle.mainStart = i, i += o.flexStyle.mainOuter;
                                else if ("center" === t)
                                    for (i = e.mainSpace / 2, i += n; o = e.children[++s];) o.flexStyle.mainStart = i, i += o.flexStyle.mainOuter;
                                else if ("space-between" === t)
                                    for (r = e.mainSpace / (e.children.length - 1), i = 0, i += n; o = e.children[++s];) o.flexStyle.mainStart = i, i += o.flexStyle.mainOuter + r;
                                else if ("space-around" === t)
                                    for (i = (r = 2 * e.mainSpace / (2 * e.children.length)) / 2, i += n; o = e.children[++s];) o.flexStyle.mainStart = i, i += o.flexStyle.mainOuter + r;
                                else
                                    for (i = 0, i += n; o = e.children[++s];) o.flexStyle.mainStart = i, i += o.flexStyle.mainOuter
                            }
                        }, {}],
                        9: [function(e, t, n) {
                            t.exports = function(e) {
                                for (var t, n = -1; t = e.children[++n];) {
                                    var i = 0;
                                    "auto" === t.flexStyle.crossBefore && ++i, "auto" === t.flexStyle.crossAfter && ++i;
                                    var r = e.cross - t.flexStyle.crossOuter;
                                    "auto" === t.flexStyle.crossBefore && (t.flexStyle.crossBefore = r / i), "auto" === t.flexStyle.crossAfter && (t.flexStyle.crossAfter = r / i), "auto" === t.flexStyle.cross ? t.flexStyle.crossOuter = t.flexStyle.crossOffset + t.flexStyle.crossBefore + t.flexStyle.crossAfter : t.flexStyle.crossOuter = t.flexStyle.cross + t.flexStyle.crossBefore + t.flexStyle.crossAfter
                                }
                            }
                        }, {}],
                        10: [function(e, t, n) {
                            t.exports = function(e) {
                                for (var t, n = 0, i = -1; t = e.children[++i];) "auto" === t.flexStyle.mainBefore && ++n, "auto" === t.flexStyle.mainAfter && ++n;
                                if (0 < n) {
                                    for (i = -1; t = e.children[++i];) "auto" === t.flexStyle.mainBefore && (t.flexStyle.mainBefore = e.mainSpace / n), "auto" === t.flexStyle.mainAfter && (t.flexStyle.mainAfter = e.mainSpace / n), "auto" === t.flexStyle.main ? t.flexStyle.mainOuter = t.flexStyle.mainOffset + t.flexStyle.mainBefore + t.flexStyle.mainAfter : t.flexStyle.mainOuter = t.flexStyle.main + t.flexStyle.mainBefore + t.flexStyle.mainAfter;
                                    e.mainSpace = 0
                                }
                            }
                        }, {}],
                        11: [function(e, t, n) {
                            var i = /^(column|row)-reverse$/;
                            t.exports = function(e) {
                                e.children.sort(function(e, t) {
                                    return e.style.order - t.style.order || e.index - t.index
                                }), i.test(e.style.flexDirection) && e.children.reverse()
                            }
                        }, {}],
                        12: [function(e, t, n) {
                            t.exports = function(e, t, n) {
                                for (var i = e.length, r = -1; ++r < i;) r in e && (n = t(n, e[r], r));
                                return n
                            }
                        }, {}],
                        13: [function(e, t, n) {
                            var i = e("./read"),
                                r = e("./write"),
                                o = e("./readAll"),
                                s = e("./writeAll");
                            t.exports = function(e) {
                                s(o(e))
                            }, t.exports.read = i, t.exports.write = r, t.exports.readAll = o, t.exports.writeAll = s
                        }, {
                            "./read": 15,
                            "./readAll": 16,
                            "./write": 17,
                            "./writeAll": 18
                        }],
                        14: [function(e, t, n) {
                            t.exports = function(e, t) {
                                var n = String(e).match(r);
                                if (!n) return e;
                                var i = n[1];
                                return "px" === (n = n[2]) ? +i : "cm" === n ? .3937 * i * 96 : "in" === n ? 96 * i : "mm" === n ? .3937 * i * 96 / 10 : "pc" === n ? 12 * i * 96 / 72 : "pt" === n ? 96 * i / 72 : "rem" === n ? 16 * i : function(e, t) {
                                    o.style.cssText = "border:none!important;clip:rect(0 0 0 0)!important;display:block!important;font-size:1em!important;height:0!important;margin:0!important;padding:0!important;position:relative!important;width:" + e + "!important", t.parentNode.insertBefore(o, t.nextSibling);
                                    e = o.offsetWidth;
                                    return t.parentNode.removeChild(o), e
                                }(e, t)
                            };
                            var r = /^([-+]?\d*\.?\d+)(%|[a-z]+)$/,
                                o = document.createElement("div")
                        }, {}],
                        15: [function(e, t, n) {
                            t.exports = function(e) {
                                var t = {
                                    alignContent: "stretch",
                                    alignItems: "stretch",
                                    alignSelf: "auto",
                                    borderBottomWidth: 0,
                                    borderLeftWidth: 0,
                                    borderRightWidth: 0,
                                    borderTopWidth: 0,
                                    boxSizing: "content-box",
                                    display: "inline",
                                    flexBasis: "auto",
                                    flexDirection: "row",
                                    flexGrow: 0,
                                    flexShrink: 1,
                                    flexWrap: "nowrap",
                                    justifyContent: "flex-start",
                                    height: "auto",
                                    marginTop: 0,
                                    marginRight: 0,
                                    marginLeft: 0,
                                    marginBottom: 0,
                                    paddingTop: 0,
                                    paddingRight: 0,
                                    paddingLeft: 0,
                                    paddingBottom: 0,
                                    maxHeight: "none",
                                    maxWidth: "none",
                                    minHeight: 0,
                                    minWidth: 0,
                                    order: 0,
                                    position: "static",
                                    width: "auto"
                                };
                                if (e instanceof Element) {
                                    var n, i = e.hasAttribute("data-style"),
                                        r = i ? e.getAttribute("data-style") : e.getAttribute("style") || "";
                                    for (n in i || e.setAttribute("data-style", r), function(e, t) {
                                            for (var n in e) n in t && !/^(alignSelf|height|width)$/.test(n) && (e[n] = t[n])
                                        }(t, window.getComputedStyle && getComputedStyle(e) || {}), function(e, t) {
                                            for (var n in e) {
                                                var i;
                                                n in t ? e[n] = t[n] : (i = n.replace(/[A-Z]/g, "-$&").toLowerCase()) in t && (e[n] = t[i])
                                            }
                                            "-js-display" in t && (e.display = t["-js-display"])
                                        }(t, e.currentStyle || {}), function(e, t) {
                                            for (var n; n = o.exec(t);) {
                                                var i = n[1].toLowerCase().replace(/-[a-z]/g, function(e) {
                                                    return e.slice(1).toUpperCase()
                                                });
                                                e[i] = n[2]
                                            }
                                        }(t, r), t) t[n] = s(t[n], e);
                                    r = e.getBoundingClientRect();
                                    t.offsetHeight = r.height || e.offsetHeight, t.offsetWidth = r.width || e.offsetWidth
                                }
                                return {
                                    element: e,
                                    style: t
                                }
                            };
                            var o = /([^\s:;]+)\s*:\s*([^;]+?)\s*(;|$)/g,
                                s = e("./getComputedLength")
                        }, {
                            "./getComputedLength": 14
                        }],
                        16: [function(e, t, n) {
                            function u(e) {
                                var t = e instanceof Element,
                                    n = t && e.getAttribute("data-style"),
                                    e = t && e.currentStyle && e.currentStyle["-js-display"];
                                return i.test(n) || r.test(e)
                            }
                            t.exports = function(e) {
                                var t = [];
                                return function e(t, n) {
                                    for (var i, r = u(t), o = [], s = -1; i = t.childNodes[++s];) {
                                        var a = 3 === i.nodeType && !/^\s*$/.test(i.nodeValue);
                                        r && a && (l = i, (i = t.insertBefore(document.createElement("flex-item"), l)).appendChild(l));
                                        var l, a = i instanceof Element;
                                        a && (l = e(i, n), r && ((a = i.style).display = "inline-block", a.position = "absolute", l.style = f(i).style, o.push(l)))
                                    }
                                    var c = {
                                        element: t,
                                        children: o
                                    };
                                    return r && (c.style = f(t).style, n.push(c)), c
                                }(e, t), t
                            };
                            var f = e("../read"),
                                i = /(^|;)\s*display\s*:\s*(inline-)?flex\s*(;|$)/i,
                                r = /^(inline-)?flex$/i
                        }, {
                            "../read": 15
                        }],
                        17: [function(e, t, n) {
                            function a(e) {
                                return "string" == typeof e ? e : Math.max(e, 0) + "px"
                            }
                            t.exports = function(e) {
                                l(e);
                                var t = e.element.style,
                                    n = "inline" === e.mainAxis ? ["main", "cross"] : ["cross", "main"];
                                t.boxSizing = "content-box", t.display = "block", t.position = "relative", t.width = a(e.flexStyle[n[0]] - e.flexStyle[n[0] + "InnerBefore"] - e.flexStyle[n[0] + "InnerAfter"] - e.flexStyle[n[0] + "BorderBefore"] - e.flexStyle[n[0] + "BorderAfter"]), t.height = a(e.flexStyle[n[1]] - e.flexStyle[n[1] + "InnerBefore"] - e.flexStyle[n[1] + "InnerAfter"] - e.flexStyle[n[1] + "BorderBefore"] - e.flexStyle[n[1] + "BorderAfter"]);
                                for (var i, r = -1; i = e.children[++r];) {
                                    var o = i.element.style,
                                        s = "inline" === i.mainAxis ? ["main", "cross"] : ["cross", "main"];
                                    o.boxSizing = "content-box", o.display = "block", o.position = "absolute", "auto" !== i.flexStyle[s[0]] && (o.width = a(i.flexStyle[s[0]] - i.flexStyle[s[0] + "InnerBefore"] - i.flexStyle[s[0] + "InnerAfter"] - i.flexStyle[s[0] + "BorderBefore"] - i.flexStyle[s[0] + "BorderAfter"])), "auto" !== i.flexStyle[s[1]] && (o.height = a(i.flexStyle[s[1]] - i.flexStyle[s[1] + "InnerBefore"] - i.flexStyle[s[1] + "InnerAfter"] - i.flexStyle[s[1] + "BorderBefore"] - i.flexStyle[s[1] + "BorderAfter"])), o.top = a(i.flexStyle[s[1] + "Start"]), o.left = a(i.flexStyle[s[0] + "Start"]), o.marginTop = a(i.flexStyle[s[1] + "Before"]), o.marginRight = a(i.flexStyle[s[0] + "After"]), o.marginBottom = a(i.flexStyle[s[1] + "After"]), o.marginLeft = a(i.flexStyle[s[0] + "Before"])
                                }
                            };
                            var l = e("../flexbox")
                        }, {
                            "../flexbox": 7
                        }],
                        18: [function(e, t, n) {
                            t.exports = function(e) {
                                for (var t, n = -1; t = e[++n];) i(t)
                            };
                            var i = e("../write")
                        }, {
                            "../write": 17
                        }]
                    }, {}, [13])(13)
                }, "object" == i(t) ? e.exports = n() : void 0 === (n = "function" == typeof(n = n) ? n.apply(t, []) : n) || (e.exports = n)
            },
            653: function(e, t, n) {
                var i, r, o;

                function Ne(e) {
                    return (Ne = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                o = function(ae) {
                    "use strict";

                    function i(e, s) {
                        function t(e) {
                            if (!(!0 === X.data(De + "_intouch") || 0 < ae(e.target).closest(s.excludedElements, X).length)) {
                                var t = e.originalEvent || e;
                                if (!t.pointerType || "mouse" != t.pointerType || 0 != s.fallbackToMouseEvents) {
                                    var n, i = t.touches,
                                        r = i ? i[0] : t;
                                    return G = Ce, i ? Z = i.length : !1 !== s.preventDefaultEvents && e.preventDefault(), Y = R = H = null, $ = 1, Q = U = z = q = W = 0, (e = {})[le] = O(le), e[ce] = O(ce), e[ue] = O(ue), e[fe] = O(fe), K = e, _(), E(0, r), !i || Z === s.fingers || s.fingers === _e || m() ? (ee = N(), 2 == Z && (E(1, i[1]), z = U = P(J[0].start, J[1].start)), (s.swipeStatus || s.pinchStatus) && (n = c(t, G))) : n = !1, !1 === n ? (c(t, G = ke), n) : (s.hold && (se = setTimeout(ae.proxy(function() {
                                        X.trigger("hold", [t.target]), s.hold && (n = s.hold.call(X, t, t.target))
                                    }, this), s.longTapThreshold)), C(!0), null)
                                }
                            }
                        }

                        function n(e) {
                            var t, n, i, r, o = e.originalEvent || e;
                            G === Ae || G === ke || T() || (t = A((n = o.touches) ? n[0] : o), te = N(), n && (Z = n.length), s.hold && clearTimeout(se), G = Ee, 2 == Z && (0 == z ? (E(1, n[1]), z = U = P(J[0].start, J[1].start)) : (A(n[1]), U = P(J[0].end, J[1].end), J[0].end, J[1].end, Y = $ < 1 ? pe : de), $ = (U / z * 1).toFixed(2), Q = Math.abs(z - U)), Z === s.fingers || s.fingers === _e || !n || m() ? (H = D(t.start, t.end), function(e, t) {
                                if (!1 !== s.preventDefaultEvents)
                                    if (s.allowPageScroll === he) e.preventDefault();
                                    else {
                                        var n = s.allowPageScroll === me;
                                        switch (t) {
                                            case le:
                                                (s.swipeLeft && n || !n && s.allowPageScroll != Se) && e.preventDefault();
                                                break;
                                            case ce:
                                                (s.swipeRight && n || !n && s.allowPageScroll != Se) && e.preventDefault();
                                                break;
                                            case ue:
                                                (s.swipeUp && n || !n && s.allowPageScroll != xe) && e.preventDefault();
                                                break;
                                            case fe:
                                                (s.swipeDown && n || !n && s.allowPageScroll != xe) && e.preventDefault()
                                        }
                                    }
                            }(e, R = D(t.last, t.end)), i = t.start, r = t.end, W = Math.round(Math.sqrt(Math.pow(r.x - i.x, 2) + Math.pow(r.y - i.y, 2))), q = I(), n = W, (e = H) != he && (n = Math.max(n, k(e)), K[e].distance = n), r = c(o, G), s.triggerOnTouchEnd && !s.triggerOnTouchLeave || (i = !0, s.triggerOnTouchLeave && (e = {
                                left: (n = (e = ae(e = this)).offset()).left,
                                right: n.left + e.outerWidth(),
                                top: n.top,
                                bottom: n.top + e.outerHeight()
                            }, t = t.end, e = e, i = t.x > e.left && t.x < e.right && t.y > e.top && t.y < e.bottom), !s.triggerOnTouchEnd && i ? G = l(Ee) : s.triggerOnTouchLeave && !i && (G = l(Ae)), G != ke && G != Ae || c(o, G))) : c(o, G = ke), !1 === r && c(o, G = ke))
                        }

                        function i(e) {
                            var t, n = e.originalEvent || e,
                                i = n.touches;
                            if (i) {
                                if (i.length && !T()) return t = n, ne = N(), ie = t.touches.length + 1, !0;
                                if (i.length && T()) return !0
                            }
                            return T() && (Z = ie), te = N(), q = I(), d() || !f() ? c(n, G = ke) : s.triggerOnTouchEnd || !1 === s.triggerOnTouchEnd && G === Ee ? (!1 !== s.preventDefaultEvents && !1 !== e.cancelable && e.preventDefault(), c(n, G = Ae)) : !s.triggerOnTouchEnd && w() ? u(n, G = Ae, ve) : G === Ee && c(n, G = ke), C(!1), null
                        }

                        function r() {
                            U = z = ee = te = Z = 0, _(), C(!($ = 1))
                        }

                        function o(e) {
                            e = e.originalEvent || e;
                            s.triggerOnTouchLeave && c(e, G = l(Ae))
                        }

                        function a() {
                            X.off(B, t), X.off(M, r), X.off(F, n), X.off(L, i), V && X.off(V, o), C(!1)
                        }

                        function l(e) {
                            var t = e,
                                n = p(),
                                i = f(),
                                r = d();
                            return !n || r ? t = ke : !i || e != Ee || s.triggerOnTouchEnd && !s.triggerOnTouchLeave ? !i && e == Ae && s.triggerOnTouchLeave && (t = ke) : t = Ae, t
                        }

                        function c(e, t) {
                            var n, i = e.touches;
                            return (g() && y() || y()) && (n = u(e, t, ge)), (h() && m() || m()) && !1 !== n && (n = u(e, t, ye)), x() && S() && !1 !== n ? n = u(e, t, be) : q > s.longTapThreshold && W < Te && s.longTap && !1 !== n ? n = u(e, t, we) : 1 !== Z && Oe || !(isNaN(W) || W < s.threshold) || !w() || !1 === n || (n = u(e, t, ve)), t === ke && r(), t === Ae && (i && i.length || r()), n
                        }

                        function u(e, t, n) {
                            var i;
                            if (n == ge) {
                                if (X.trigger("swipeStatus", [t, H || null, W || 0, q || 0, Z, J, R]), s.swipeStatus && !1 === (i = s.swipeStatus.call(X, e, t, H || null, W || 0, q || 0, Z, J, R))) return !1;
                                if (t == Ae && g()) {
                                    if (clearTimeout(oe), clearTimeout(se), X.trigger("swipe", [H, W, q, Z, J, R]), s.swipe && !1 === (i = s.swipe.call(X, e, H, W, q, Z, J, R))) return !1;
                                    switch (H) {
                                        case le:
                                            X.trigger("swipeLeft", [H, W, q, Z, J, R]), s.swipeLeft && (i = s.swipeLeft.call(X, e, H, W, q, Z, J, R));
                                            break;
                                        case ce:
                                            X.trigger("swipeRight", [H, W, q, Z, J, R]), s.swipeRight && (i = s.swipeRight.call(X, e, H, W, q, Z, J, R));
                                            break;
                                        case ue:
                                            X.trigger("swipeUp", [H, W, q, Z, J, R]), s.swipeUp && (i = s.swipeUp.call(X, e, H, W, q, Z, J, R));
                                            break;
                                        case fe:
                                            X.trigger("swipeDown", [H, W, q, Z, J, R]), s.swipeDown && (i = s.swipeDown.call(X, e, H, W, q, Z, J, R))
                                    }
                                }
                            }
                            if (n == ye) {
                                if (X.trigger("pinchStatus", [t, Y || null, Q || 0, q || 0, Z, $, J]), s.pinchStatus && !1 === (i = s.pinchStatus.call(X, e, t, Y || null, Q || 0, q || 0, Z, $, J))) return !1;
                                if (t == Ae && h()) switch (Y) {
                                    case de:
                                        X.trigger("pinchIn", [Y || null, Q || 0, q || 0, Z, $, J]), s.pinchIn && (i = s.pinchIn.call(X, e, Y || null, Q || 0, q || 0, Z, $, J));
                                        break;
                                    case pe:
                                        X.trigger("pinchOut", [Y || null, Q || 0, q || 0, Z, $, J]), s.pinchOut && (i = s.pinchOut.call(X, e, Y || null, Q || 0, q || 0, Z, $, J))
                                }
                            }
                            return n == ve ? t !== ke && t !== Ae || (clearTimeout(oe), clearTimeout(se), S() && !x() ? (re = N(), oe = setTimeout(ae.proxy(function() {
                                re = null, X.trigger("tap", [e.target]), s.tap && (i = s.tap.call(X, e, e.target))
                            }, this), s.doubleTapThreshold)) : (re = null, X.trigger("tap", [e.target]), s.tap && (i = s.tap.call(X, e, e.target)))) : n == be ? t !== ke && t !== Ae || (clearTimeout(oe), clearTimeout(se), re = null, X.trigger("doubletap", [e.target]), s.doubleTap && (i = s.doubleTap.call(X, e, e.target))) : n == we && (t !== ke && t !== Ae || (clearTimeout(oe), re = null, X.trigger("longtap", [e.target]), s.longTap && (i = s.longTap.call(X, e, e.target)))), i
                        }

                        function f() {
                            var e = !0;
                            return e = null !== s.threshold ? W >= s.threshold : e
                        }

                        function d() {
                            var e = !1;
                            return e = null !== s.cancelThreshold && null !== H ? k(H) - W >= s.cancelThreshold : e
                        }

                        function p() {
                            return !s.maxTimeThreshold || !(q >= s.maxTimeThreshold)
                        }

                        function h() {
                            var e = v(),
                                t = b(),
                                n = null === s.pinchThreshold || Q >= s.pinchThreshold;
                            return e && t && n
                        }

                        function m() {
                            return s.pinchStatus || s.pinchIn || s.pinchOut
                        }

                        function g() {
                            var e = p(),
                                t = f(),
                                n = v(),
                                i = b();
                            return !d() && i && n && t && e
                        }

                        function y() {
                            return s.swipe || s.swipeStatus || s.swipeLeft || s.swipeRight || s.swipeUp || s.swipeDown
                        }

                        function v() {
                            return Z === s.fingers || s.fingers === _e || !Oe
                        }

                        function b() {
                            return 0 !== J[0].end.x
                        }

                        function w() {
                            return s.tap
                        }

                        function S() {
                            return !!s.doubleTap
                        }

                        function x() {
                            if (null == re) return !1;
                            var e = N();
                            return S() && e - re <= s.doubleTapThreshold
                        }

                        function _() {
                            ie = ne = 0
                        }

                        function T() {
                            var e = !1;
                            return e = ne && N() - ne <= s.fingerReleaseThreshold ? !0 : e
                        }

                        function C(e) {
                            X && (!0 === e ? (X.on(F, n), X.on(L, i), V && X.on(V, o)) : (X.off(F, n, !1), X.off(L, i, !1), V && X.off(V, o, !1)), X.data(De + "_intouch", !0 === e))
                        }

                        function E(e, t) {
                            var n = {
                                start: {
                                    x: 0,
                                    y: 0
                                },
                                last: {
                                    x: 0,
                                    y: 0
                                },
                                end: {
                                    x: 0,
                                    y: 0
                                }
                            };
                            return n.start.x = n.last.x = n.end.x = t.pageX || t.clientX, n.start.y = n.last.y = n.end.y = t.pageY || t.clientY, J[e] = n
                        }

                        function A(e) {
                            var t = void 0 !== e.identifier ? e.identifier : 0,
                                n = J[t] || null;
                            return (n = null === n ? E(t, e) : n).last.x = n.end.x, n.last.y = n.end.y, n.end.x = e.pageX || e.clientX, n.end.y = e.pageY || e.clientY, n
                        }

                        function k(e) {
                            return K[e] ? K[e].distance : void 0
                        }

                        function O(e) {
                            return {
                                direction: e,
                                distance: 0
                            }
                        }

                        function I() {
                            return te - ee
                        }

                        function P(e, t) {
                            var n = Math.abs(e.x - t.x),
                                t = Math.abs(e.y - t.y);
                            return Math.round(Math.sqrt(n * n + t * t))
                        }

                        function D(e, t) {
                            if (i = t, (n = e).x == i.x && n.y == i.y) return he;
                            var n, i, e = (i = t, e = (t = e).x - i.x, t = i.y - t.y, e = Math.atan2(t, e), e = (e = Math.round(180 * e / Math.PI)) < 0 ? 360 - Math.abs(e) : e);
                            return e <= 45 && 0 <= e || e <= 360 && 315 <= e ? le : 135 <= e && e <= 225 ? ce : 45 < e && e < 135 ? fe : ue
                        }

                        function N() {
                            return (new Date).getTime()
                        }
                        var s = ae.extend({}, s),
                            j = Oe || Pe || !s.fallbackToMouseEvents,
                            B = j ? Pe ? Ie ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
                            F = j ? Pe ? Ie ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
                            L = j ? Pe ? Ie ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
                            V = !j || Pe ? "mouseleave" : null,
                            M = Pe ? Ie ? "MSPointerCancel" : "pointercancel" : "touchcancel",
                            W = 0,
                            H = null,
                            R = null,
                            q = 0,
                            z = 0,
                            U = 0,
                            $ = 1,
                            Q = 0,
                            Y = 0,
                            K = null,
                            X = ae(e),
                            G = "start",
                            Z = 0,
                            J = {},
                            ee = 0,
                            te = 0,
                            ne = 0,
                            ie = 0,
                            re = 0,
                            oe = null,
                            se = null;
                        try {
                            X.on(B, t), X.on(M, r)
                        } catch (e) {
                            ae.error("events not supported " + B + "," + M + " on jQuery.swipe")
                        }
                        this.enable = function() {
                            return this.disable(), X.on(B, t), X.on(M, r), X
                        }, this.disable = function() {
                            return a(), X
                        }, this.destroy = function() {
                            a(), X.data(De, null), X = null
                        }, this.option = function(e, t) {
                            if ("object" == Ne(e)) s = ae.extend(s, e);
                            else if (void 0 !== s[e]) {
                                if (void 0 === t) return s[e];
                                s[e] = t
                            } else {
                                if (!e) return s;
                                ae.error("Option " + e + " does not exist on jQuery.swipe.options")
                            }
                            return null
                        }
                    }
                    var le = "left",
                        ce = "right",
                        ue = "up",
                        fe = "down",
                        de = "in",
                        pe = "out",
                        he = "none",
                        me = "auto",
                        ge = "swipe",
                        ye = "pinch",
                        ve = "tap",
                        be = "doubletap",
                        we = "longtap",
                        Se = "horizontal",
                        xe = "vertical",
                        _e = "all",
                        Te = 10,
                        Ce = "start",
                        Ee = "move",
                        Ae = "end",
                        ke = "cancel",
                        Oe = "ontouchstart" in window,
                        Ie = window.navigator.msPointerEnabled && !window.PointerEvent && !Oe,
                        Pe = (window.PointerEvent || window.navigator.msPointerEnabled) && !Oe,
                        De = "TouchSwipe";
                    ae.fn.swipe = function(e) {
                        var t = ae(this),
                            n = t.data(De);
                        if (n && "string" == typeof e) {
                            if (n[e]) return n[e].apply(n, Array.prototype.slice.call(arguments, 1));
                            ae.error("Method " + e + " does not exist on jQuery.swipe")
                        } else if (n && "object" == Ne(e)) n.option.apply(n, arguments);
                        else if (!(n || "object" != Ne(e) && e)) return function(n) {
                            return !n || void 0 !== n.allowPageScroll || void 0 === n.swipe && void 0 === n.swipeStatus || (n.allowPageScroll = he), void 0 !== n.click && void 0 === n.tap && (n.tap = n.click), n = ae.extend({}, ae.fn.swipe.defaults, n = n || {}), this.each(function() {
                                var e = ae(this),
                                    t = e.data(De);
                                t || (t = new i(this, n), e.data(De, t))
                            })
                        }.apply(this, arguments);
                        return t
                    }, ae.fn.swipe.version = "1.6.18", ae.fn.swipe.defaults = {
                        fingers: 1,
                        threshold: 75,
                        cancelThreshold: null,
                        pinchThreshold: 20,
                        maxTimeThreshold: null,
                        fingerReleaseThreshold: 250,
                        longTapThreshold: 500,
                        doubleTapThreshold: 200,
                        swipe: null,
                        swipeLeft: null,
                        swipeRight: null,
                        swipeUp: null,
                        swipeDown: null,
                        swipeStatus: null,
                        pinchIn: null,
                        pinchOut: null,
                        pinchStatus: null,
                        click: null,
                        tap: null,
                        doubleTap: null,
                        longTap: null,
                        hold: null,
                        triggerOnTouchEnd: !0,
                        triggerOnTouchLeave: !1,
                        allowPageScroll: "auto",
                        fallbackToMouseEvents: !0,
                        excludedElements: ".noSwipe",
                        preventDefaultEvents: !0
                    }, ae.fn.swipe.phases = {
                        PHASE_START: Ce,
                        PHASE_MOVE: Ee,
                        PHASE_END: Ae,
                        PHASE_CANCEL: ke
                    }, ae.fn.swipe.directions = {
                        LEFT: le,
                        RIGHT: ce,
                        UP: ue,
                        DOWN: fe,
                        IN: de,
                        OUT: pe
                    }, ae.fn.swipe.pageScroll = {
                        NONE: he,
                        HORIZONTAL: Se,
                        VERTICAL: xe,
                        AUTO: me
                    }, ae.fn.swipe.fingers = {
                        ONE: 1,
                        TWO: 2,
                        THREE: 3,
                        FOUR: 4,
                        FIVE: 5,
                        ALL: _e
                    }
                }, n.amdO.jQuery ? (i = [n(609)], void 0 === (r = "function" == typeof(r = o) ? r.apply(t, i) : r) || (e.exports = r)) : o(e.exports ? n(609) : jQuery)
            },
            158: function(e, t) {
                var n;

                function Q(e) {
                    return (Q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                void 0 === (n = "function" == typeof(n = function() {
                    "use strict";
                    var t = function() {
                        function i(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || false;
                                i.configurable = true;
                                if ("value" in i) i.writable = true;
                                Object.defineProperty(e, i.key, i)
                            }
                        }
                        return function(e, t, n) {
                            if (t) i(e.prototype, t);
                            if (n) i(e, n);
                            return e
                        }
                    }();

                    function i(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }
                    var _ = undefined;
                    if (typeof _ === "undefined") _ = {
                        modules: []
                    };
                    var r = null;

                    function s(e) {
                        var t = e.getBoundingClientRect();
                        var n = {};
                        for (var i in t) n[i] = t[i];
                        try {
                            if (e.ownerDocument !== document) {
                                var r = e.ownerDocument.defaultView.frameElement;
                                if (r) {
                                    var o = s(r);
                                    n.top += o.top;
                                    n.bottom += o.top;
                                    n.left += o.left;
                                    n.right += o.left
                                }
                            }
                        } catch (e) {}
                        return n
                    }

                    function c(e) {
                        var t = getComputedStyle(e) || {};
                        var n = t.position;
                        var i = [];
                        if (n === "fixed") return [e];
                        var r = e;
                        while ((r = r.parentNode) && r && r.nodeType === 1) {
                            var o = undefined;
                            try {
                                o = getComputedStyle(r)
                            } catch (e) {}
                            if (typeof o === "undefined" || o === null) {
                                i.push(r);
                                return i
                            }
                            var s = o;
                            var a = s.overflow;
                            var l = s.overflowX;
                            var c = s.overflowY;
                            if (/(auto|scroll|overlay)/.test(a + c + l))
                                if (n !== "absolute" || ["relative", "absolute", "fixed"].indexOf(o.position) >= 0) i.push(r)
                        }
                        i.push(e.ownerDocument.body);
                        if (e.ownerDocument !== document) i.push(e.ownerDocument.defaultView);
                        return i
                    }
                    var o = function() {
                            var e = 0;
                            return function() {
                                return ++e
                            }
                        }(),
                        a = {},
                        l = function e() {
                            var t = r;
                            if (!t || !document.body.contains(t)) {
                                t = document.createElement("div");
                                t.setAttribute("data-tether-id", o());
                                x(t.style, {
                                    top: 0,
                                    left: 0,
                                    position: "absolute"
                                });
                                document.body.appendChild(t);
                                r = t
                            }
                            var n = t.getAttribute("data-tether-id");
                            if (typeof a[n] === "undefined") {
                                a[n] = s(t);
                                k(function() {
                                    delete a[n]
                                })
                            }
                            return a[n]
                        };

                    function u() {
                        if (r) document.body.removeChild(r);
                        r = null
                    }

                    function T(e) {
                        var t = undefined;
                        if (e === document) {
                            t = document;
                            e = document.documentElement
                        } else t = e.ownerDocument;
                        var n = t.documentElement;
                        var i = s(e);
                        var r = l();
                        i.top -= r.top;
                        i.left -= r.left;
                        if (typeof i.width === "undefined") i.width = document.body.scrollWidth - i.left - i.right;
                        if (typeof i.height === "undefined") i.height = document.body.scrollHeight - i.top - i.bottom;
                        i.top = i.top - n.clientTop;
                        i.left = i.left - n.clientLeft;
                        i.right = t.body.clientWidth - i.width - i.left;
                        i.bottom = t.body.clientHeight - i.height - i.top;
                        return i
                    }

                    function C(e) {
                        return e.offsetParent || document.documentElement
                    }
                    var f = null;

                    function E() {
                        if (f) return f;
                        var e = document.createElement("div");
                        e.style.width = "100%";
                        e.style.height = "200px";
                        var t = document.createElement("div");
                        x(t.style, {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            pointerEvents: "none",
                            visibility: "hidden",
                            width: "200px",
                            height: "150px",
                            overflow: "hidden"
                        });
                        t.appendChild(e);
                        document.body.appendChild(t);
                        var n = e.offsetWidth;
                        t.style.overflow = "scroll";
                        var i = e.offsetWidth;
                        if (n === i) i = t.clientWidth;
                        document.body.removeChild(t);
                        var r = n - i;
                        f = {
                            width: r,
                            height: r
                        };
                        return f
                    }

                    function x() {
                        var n = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                        var e = [];
                        Array.prototype.push.apply(e, arguments);
                        e.slice(1).forEach(function(e) {
                            if (e)
                                for (var t in e)
                                    if ({}.hasOwnProperty.call(e, t)) n[t] = e[t]
                        });
                        return n
                    }

                    function d(t, e) {
                        if (typeof t.classList !== "undefined") e.split(" ").forEach(function(e) {
                            if (e.trim()) t.classList.remove(e)
                        });
                        else {
                            var n = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi");
                            var i = m(t).replace(n, " ");
                            g(t, i)
                        }
                    }

                    function p(t, e) {
                        if (typeof t.classList !== "undefined") e.split(" ").forEach(function(e) {
                            if (e.trim()) t.classList.add(e)
                        });
                        else {
                            d(t, e);
                            var n = m(t) + (" " + e);
                            g(t, n)
                        }
                    }

                    function h(e, t) {
                        if (typeof e.classList !== "undefined") return e.classList.contains(t);
                        var n = m(e);
                        return new RegExp("(^| )" + t + "( |$)", "gi").test(n)
                    }

                    function m(e) {
                        if (e.className instanceof e.ownerDocument.defaultView.SVGAnimatedString) return e.className.baseVal;
                        return e.className
                    }

                    function g(e, t) {
                        e.setAttribute("class", t)
                    }

                    function A(t, n, e) {
                        e.forEach(function(e) {
                            if (n.indexOf(e) === -1 && h(t, e)) d(t, e)
                        });
                        n.forEach(function(e) {
                            if (!h(t, e)) p(t, e)
                        })
                    }
                    var n = [],
                        k = function e(t) {
                            n.push(t)
                        },
                        O = function e() {
                            var t = undefined;
                            while (t = n.pop()) t()
                        },
                        e = function() {
                            function e() {
                                i(this, e)
                            }
                            t(e, [{
                                key: "on",
                                value: function e(t, n, i) {
                                    var r = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
                                    if (typeof this.bindings === "undefined") this.bindings = {};
                                    if (typeof this.bindings[t] === "undefined") this.bindings[t] = [];
                                    this.bindings[t].push({
                                        handler: n,
                                        ctx: i,
                                        once: r
                                    })
                                }
                            }, {
                                key: "once",
                                value: function e(t, n, i) {
                                    this.on(t, n, i, true)
                                }
                            }, {
                                key: "off",
                                value: function e(t, n) {
                                    if (typeof this.bindings === "undefined" || typeof this.bindings[t] === "undefined") return;
                                    if (typeof n === "undefined") delete this.bindings[t];
                                    else {
                                        var i = 0;
                                        while (i < this.bindings[t].length)
                                            if (this.bindings[t][i].handler === n) this.bindings[t].splice(i, 1);
                                            else ++i
                                    }
                                }
                            }, {
                                key: "trigger",
                                value: function e(t) {
                                    if (typeof this.bindings !== "undefined" && this.bindings[t]) {
                                        var n = 0;
                                        for (var i = arguments.length, r = Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) r[o - 1] = arguments[o];
                                        while (n < this.bindings[t].length) {
                                            var s = this.bindings[t][n];
                                            var a = s.handler;
                                            var l = s.ctx;
                                            var c = s.once;
                                            var u = l;
                                            if (typeof u === "undefined") u = this;
                                            a.apply(u, r);
                                            if (c) this.bindings[t].splice(n, 1);
                                            else ++n
                                        }
                                    }
                                }
                            }]);
                            return e
                        }();
                    _.Utils = {
                        getActualBoundingClientRect: s,
                        getScrollParents: c,
                        getBounds: T,
                        getOffsetParent: C,
                        extend: x,
                        addClass: p,
                        removeClass: d,
                        hasClass: h,
                        updateClasses: A,
                        defer: k,
                        flush: O,
                        uniqueId: o,
                        Evented: e,
                        getScrollBarSize: E,
                        removeUtilElements: u
                    };
                    var I = function() {
                            function n(e, t) {
                                var n = [];
                                var i = true;
                                var r = false;
                                var o = undefined;
                                try {
                                    for (var s = e[Symbol.iterator](), a; !(i = (a = s.next()).done); i = true) {
                                        n.push(a.value);
                                        if (t && n.length === t) break
                                    }
                                } catch (e) {
                                    r = true;
                                    o = e
                                } finally {
                                    try {
                                        if (!i && s["return"]) s["return"]()
                                    } finally {
                                        if (r) throw o
                                    }
                                }
                                return n
                            }
                            return function(e, t) {
                                if (Array.isArray(e)) return e;
                                else if (Symbol.iterator in Object(e)) return n(e, t);
                                else throw new TypeError("Invalid attempt to destructure non-iterable instance")
                            }
                        }(),
                        t = function() {
                            function i(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var i = t[n];
                                    i.enumerable = i.enumerable || false;
                                    i.configurable = true;
                                    if ("value" in i) i.writable = true;
                                    Object.defineProperty(e, i.key, i)
                                }
                            }
                            return function(e, t, n) {
                                if (t) i(e.prototype, t);
                                if (n) i(e, n);
                                return e
                            }
                        }(),
                        y = function e(t, n, i) {
                            var r = true;
                            e: while (r) {
                                var o = t,
                                    s = n,
                                    a = i;
                                r = false;
                                if (o === null) o = Function.prototype;
                                var l = Object.getOwnPropertyDescriptor(o, s);
                                if (l === undefined) {
                                    var c = Object.getPrototypeOf(o);
                                    if (c === null) return undefined;
                                    else {
                                        t = c;
                                        n = s;
                                        i = a;
                                        r = true;
                                        l = c = undefined;
                                        continue e
                                    }
                                } else if ("value" in l) return l.value;
                                else {
                                    var u = l.get;
                                    if (u === undefined) return undefined;
                                    return u.call(a)
                                }
                            }
                        };

                    function i(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }

                    function v(e, t) {
                        if (typeof t !== "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + Q(t));
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: false,
                                writable: true,
                                configurable: true
                            }
                        });
                        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
                    }
                    if (typeof _ === "undefined") throw new Error("You must include the utils.js file before tether.js");
                    var b = _.Utils,
                        c = b.getScrollParents,
                        T = b.getBounds,
                        C = b.getOffsetParent,
                        x = b.extend,
                        p = b.addClass,
                        d = b.removeClass,
                        A = b.updateClasses,
                        k = b.defer,
                        O = b.flush,
                        E = b.getScrollBarSize,
                        u = b.removeUtilElements;

                    function w(e, t) {
                        var n = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
                        return e + n >= t && t >= e - n
                    }
                    var S = function() {
                            if (typeof document === "undefined") return "";
                            var e = document.createElement("div");
                            var t = ["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"];
                            for (var n = 0; n < t.length; ++n) {
                                var i = t[n];
                                if (e.style[i] !== undefined) return i
                            }
                        }(),
                        P = [],
                        D = function e() {
                            P.forEach(function(e) {
                                e.position(false)
                            });
                            O()
                        };

                    function N() {
                        if ((typeof performance === "undefined" ? "undefined" : Q(performance)) === "object" && typeof performance.now === "function") return performance.now();
                        return +new Date
                    }(function() {
                        var t = null;
                        var n = null;
                        var i = null;
                        var r = function e() {
                            if (typeof n !== "undefined" && n > 16) {
                                n = Math.min(n - 16, 250);
                                i = setTimeout(e, 250);
                                return
                            }
                            if (typeof t !== "undefined" && N() - t < 10) return;
                            if (i != null) {
                                clearTimeout(i);
                                i = null
                            }
                            t = N();
                            D();
                            n = N() - t
                        };
                        if (typeof window !== "undefined" && typeof window.addEventListener !== "undefined")["resize", "scroll", "touchmove"].forEach(function(e) {
                            window.addEventListener(e, r)
                        })
                    })();
                    var j = {
                            center: "center",
                            left: "right",
                            right: "left"
                        },
                        B = {
                            middle: "middle",
                            top: "bottom",
                            bottom: "top"
                        },
                        F = {
                            top: 0,
                            left: 0,
                            middle: "50%",
                            center: "50%",
                            bottom: "100%",
                            right: "100%"
                        },
                        L = function e(t, n) {
                            var i = t.left;
                            var r = t.top;
                            if (i === "auto") i = j[n.left];
                            if (r === "auto") r = B[n.top];
                            return {
                                left: i,
                                top: r
                            }
                        },
                        V = function e(t) {
                            var n = t.left;
                            var i = t.top;
                            if (typeof F[t.left] !== "undefined") n = F[t.left];
                            if (typeof F[t.top] !== "undefined") i = F[t.top];
                            return {
                                left: n,
                                top: i
                            }
                        };

                    function M() {
                        var i = {
                            top: 0,
                            left: 0
                        };
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        t.forEach(function(e) {
                            var t = e.top;
                            var n = e.left;
                            if (typeof t === "string") t = parseFloat(t, 10);
                            if (typeof n === "string") n = parseFloat(n, 10);
                            i.top += t;
                            i.left += n
                        });
                        return i
                    }

                    function W(e, t) {
                        if (typeof e.left === "string" && e.left.indexOf("%") !== -1) e.left = parseFloat(e.left, 10) / 100 * t.width;
                        if (typeof e.top === "string" && e.top.indexOf("%") !== -1) e.top = parseFloat(e.top, 10) / 100 * t.height;
                        return e
                    }
                    var H = function e(t) {
                            var n = t.split(" ");
                            var i = I(n, 2);
                            var r = i[0];
                            var o = i[1];
                            return {
                                top: r,
                                left: o
                            }
                        },
                        R = H,
                        q = function(e) {
                            v(n, e);

                            function n(e) {
                                var t = this;
                                i(this, n);
                                y(Object.getPrototypeOf(n.prototype), "constructor", this).call(this);
                                this.position = this.position.bind(this);
                                P.push(this);
                                this.history = [];
                                this.setOptions(e, false);
                                _.modules.forEach(function(e) {
                                    if (typeof e.initialize !== "undefined") e.initialize.call(t)
                                });
                                this.position()
                            }
                            t(n, [{
                                key: "getClass",
                                value: function e() {
                                    var t = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
                                    var n = this.options.classes;
                                    if (typeof n !== "undefined" && n[t]) return this.options.classes[t];
                                    else if (this.options.classPrefix) return this.options.classPrefix + "-" + t;
                                    else return t
                                }
                            }, {
                                key: "setOptions",
                                value: function e(t) {
                                    var n = this;
                                    var i = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
                                    var r = {
                                        offset: "0 0",
                                        targetOffset: "0 0",
                                        targetAttachment: "auto auto",
                                        classPrefix: "tether"
                                    };
                                    this.options = x(r, t);
                                    var o = this.options;
                                    var s = o.element;
                                    var a = o.target;
                                    var l = o.targetModifier;
                                    this.element = s;
                                    this.target = a;
                                    this.targetModifier = l;
                                    if (this.target === "viewport") {
                                        this.target = document.body;
                                        this.targetModifier = "visible"
                                    } else if (this.target === "scroll-handle") {
                                        this.target = document.body;
                                        this.targetModifier = "scroll-handle"
                                    } ["element", "target"].forEach(function(e) {
                                        if (typeof n[e] === "undefined") throw new Error("Tether Error: Both element and target must be defined");
                                        if (typeof n[e].jquery !== "undefined") n[e] = n[e][0];
                                        else if (typeof n[e] === "string") n[e] = document.querySelector(n[e])
                                    });
                                    p(this.element, this.getClass("element"));
                                    if (!(this.options.addTargetClasses === false)) p(this.target, this.getClass("target"));
                                    if (!this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
                                    this.targetAttachment = R(this.options.targetAttachment);
                                    this.attachment = R(this.options.attachment);
                                    this.offset = H(this.options.offset);
                                    this.targetOffset = H(this.options.targetOffset);
                                    if (typeof this.scrollParents !== "undefined") this.disable();
                                    if (this.targetModifier === "scroll-handle") this.scrollParents = [this.target];
                                    else this.scrollParents = c(this.target);
                                    if (!(this.options.enabled === false)) this.enable(i)
                                }
                            }, {
                                key: "getTargetBounds",
                                value: function e() {
                                    if (typeof this.targetModifier !== "undefined") {
                                        if (this.targetModifier === "visible")
                                            if (this.target === document.body) return {
                                                top: pageYOffset,
                                                left: pageXOffset,
                                                height: innerHeight,
                                                width: innerWidth
                                            };
                                            else {
                                                var t = T(this.target);
                                                var n = {
                                                    height: t.height,
                                                    width: t.width,
                                                    top: t.top,
                                                    left: t.left
                                                };
                                                n.height = Math.min(n.height, t.height - (pageYOffset - t.top));
                                                n.height = Math.min(n.height, t.height - (t.top + t.height - (pageYOffset + innerHeight)));
                                                n.height = Math.min(innerHeight, n.height);
                                                n.height -= 2;
                                                n.width = Math.min(n.width, t.width - (pageXOffset - t.left));
                                                n.width = Math.min(n.width, t.width - (t.left + t.width - (pageXOffset + innerWidth)));
                                                n.width = Math.min(innerWidth, n.width);
                                                n.width -= 2;
                                                if (n.top < pageYOffset) n.top = pageYOffset;
                                                if (n.left < pageXOffset) n.left = pageXOffset;
                                                return n
                                            }
                                        else if (this.targetModifier === "scroll-handle") {
                                            var t = undefined;
                                            var i = this.target;
                                            if (i === document.body) {
                                                i = document.documentElement;
                                                t = {
                                                    left: pageXOffset,
                                                    top: pageYOffset,
                                                    height: innerHeight,
                                                    width: innerWidth
                                                }
                                            } else t = T(i);
                                            var r = getComputedStyle(i);
                                            var o = i.scrollWidth > i.clientWidth || [r.overflow, r.overflowX].indexOf("scroll") >= 0 || this.target !== document.body;
                                            var s = 0;
                                            if (o) s = 15;
                                            var a = t.height - parseFloat(r.borderTopWidth) - parseFloat(r.borderBottomWidth) - s;
                                            var n = {
                                                width: 15,
                                                height: a * .975 * (a / i.scrollHeight),
                                                left: t.left + t.width - parseFloat(r.borderLeftWidth) - 15
                                            };
                                            var l = 0;
                                            if (a < 408 && this.target === document.body) l = -11e-5 * Math.pow(a, 2) - .00727 * a + 22.58;
                                            if (this.target !== document.body) n.height = Math.max(n.height, 24);
                                            var c = this.target.scrollTop / (i.scrollHeight - a);
                                            n.top = c * (a - n.height - l) + t.top + parseFloat(r.borderTopWidth);
                                            if (this.target === document.body) n.height = Math.max(n.height, 24);
                                            return n
                                        }
                                    } else return T(this.target)
                                }
                            }, {
                                key: "clearCache",
                                value: function e() {
                                    this._cache = {}
                                }
                            }, {
                                key: "cache",
                                value: function e(t, n) {
                                    if (typeof this._cache === "undefined") this._cache = {};
                                    if (typeof this._cache[t] === "undefined") this._cache[t] = n.call(this);
                                    return this._cache[t]
                                }
                            }, {
                                key: "enable",
                                value: function e() {
                                    var t = this;
                                    var n = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
                                    if (!(this.options.addTargetClasses === false)) p(this.target, this.getClass("enabled"));
                                    p(this.element, this.getClass("enabled"));
                                    this.enabled = true;
                                    this.scrollParents.forEach(function(e) {
                                        if (e !== t.target.ownerDocument) e.addEventListener("scroll", t.position)
                                    });
                                    if (n) this.position()
                                }
                            }, {
                                key: "disable",
                                value: function e() {
                                    var t = this;
                                    d(this.target, this.getClass("enabled"));
                                    d(this.element, this.getClass("enabled"));
                                    this.enabled = false;
                                    if (typeof this.scrollParents !== "undefined") this.scrollParents.forEach(function(e) {
                                        e.removeEventListener("scroll", t.position)
                                    })
                                }
                            }, {
                                key: "destroy",
                                value: function e() {
                                    var n = this;
                                    this.disable();
                                    P.forEach(function(e, t) {
                                        if (e === n) P.splice(t, 1)
                                    });
                                    if (P.length === 0) u()
                                }
                            }, {
                                key: "updateAttachClasses",
                                value: function e(t, n) {
                                    var i = this;
                                    t = t || this.attachment;
                                    n = n || this.targetAttachment;
                                    var r = ["left", "top", "bottom", "right", "middle", "center"];
                                    if (typeof this._addAttachClasses !== "undefined" && this._addAttachClasses.length) this._addAttachClasses.splice(0, this._addAttachClasses.length);
                                    if (typeof this._addAttachClasses === "undefined") this._addAttachClasses = [];
                                    var o = this._addAttachClasses;
                                    if (t.top) o.push(this.getClass("element-attached") + "-" + t.top);
                                    if (t.left) o.push(this.getClass("element-attached") + "-" + t.left);
                                    if (n.top) o.push(this.getClass("target-attached") + "-" + n.top);
                                    if (n.left) o.push(this.getClass("target-attached") + "-" + n.left);
                                    var s = [];
                                    r.forEach(function(e) {
                                        s.push(i.getClass("element-attached") + "-" + e);
                                        s.push(i.getClass("target-attached") + "-" + e)
                                    });
                                    k(function() {
                                        if (!(typeof i._addAttachClasses !== "undefined")) return;
                                        A(i.element, i._addAttachClasses, s);
                                        if (!(i.options.addTargetClasses === false)) A(i.target, i._addAttachClasses, s);
                                        delete i._addAttachClasses
                                    })
                                }
                            }, {
                                key: "position",
                                value: function e() {
                                    var a = this;
                                    var t = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
                                    if (!this.enabled) return;
                                    this.clearCache();
                                    var n = L(this.targetAttachment, this.attachment);
                                    this.updateAttachClasses(this.attachment, n);
                                    var i = this.cache("element-bounds", function() {
                                        return T(a.element)
                                    });
                                    var r = i.width;
                                    var o = i.height;
                                    if (r === 0 && o === 0 && typeof this.lastSize !== "undefined") {
                                        var s = this.lastSize;
                                        r = s.width;
                                        o = s.height
                                    } else this.lastSize = {
                                        width: r,
                                        height: o
                                    };
                                    var l = this.cache("target-bounds", function() {
                                        return a.getTargetBounds()
                                    });
                                    var c = l;
                                    var u = W(V(this.attachment), {
                                        width: r,
                                        height: o
                                    });
                                    var f = W(V(n), c);
                                    var d = W(this.offset, {
                                        width: r,
                                        height: o
                                    });
                                    var p = W(this.targetOffset, c);
                                    u = M(u, d);
                                    f = M(f, p);
                                    var h = l.left + f.left - u.left;
                                    var m = l.top + f.top - u.top;
                                    for (var g = 0; g < _.modules.length; ++g) {
                                        var y = _.modules[g];
                                        var v = y.position.call(this, {
                                            left: h,
                                            top: m,
                                            targetAttachment: n,
                                            targetPos: l,
                                            elementPos: i,
                                            offset: u,
                                            targetOffset: f,
                                            manualOffset: d,
                                            manualTargetOffset: p,
                                            scrollbarSize: x,
                                            attachment: this.attachment
                                        });
                                        if (v === false) return false;
                                        else if (typeof v === "undefined" || Q(v) !== "object") continue;
                                        else {
                                            m = v.top;
                                            h = v.left
                                        }
                                    }
                                    var b = {
                                        page: {
                                            top: m,
                                            left: h
                                        },
                                        viewport: {
                                            top: m - pageYOffset,
                                            bottom: pageYOffset - m - o + innerHeight,
                                            left: h - pageXOffset,
                                            right: pageXOffset - h - r + innerWidth
                                        }
                                    };
                                    var w = this.target.ownerDocument;
                                    var S = w.defaultView;
                                    var x = undefined;
                                    if (S.innerHeight > w.documentElement.clientHeight) {
                                        x = this.cache("scrollbar-size", E);
                                        b.viewport.bottom -= x.height
                                    }
                                    if (S.innerWidth > w.documentElement.clientWidth) {
                                        x = this.cache("scrollbar-size", E);
                                        b.viewport.right -= x.width
                                    }
                                    if (["", "static"].indexOf(w.body.style.position) === -1 || ["", "static"].indexOf(w.body.parentElement.style.position) === -1) {
                                        b.page.bottom = w.body.scrollHeight - m - o;
                                        b.page.right = w.body.scrollWidth - h - r
                                    }
                                    if (typeof this.options.optimizations !== "undefined" && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== "undefined"))(function() {
                                        var e = a.cache("target-offsetparent", function() {
                                            return C(a.target)
                                        });
                                        var t = a.cache("target-offsetparent-bounds", function() {
                                            return T(e)
                                        });
                                        var n = getComputedStyle(e);
                                        var i = t;
                                        var r = {};
                                        ["Top", "Left", "Bottom", "Right"].forEach(function(e) {
                                            r[e.toLowerCase()] = parseFloat(n["border" + e + "Width"])
                                        });
                                        t.right = w.body.scrollWidth - t.left - i.width + r.right;
                                        t.bottom = w.body.scrollHeight - t.top - i.height + r.bottom;
                                        if (b.page.top >= t.top + r.top && b.page.bottom >= t.bottom)
                                            if (b.page.left >= t.left + r.left && b.page.right >= t.right) {
                                                var o = e.scrollTop;
                                                var s = e.scrollLeft;
                                                b.offset = {
                                                    top: b.page.top - t.top + o - r.top,
                                                    left: b.page.left - t.left + s - r.left
                                                }
                                            }
                                    })();
                                    this.move(b);
                                    this.history.unshift(b);
                                    if (this.history.length > 3) this.history.pop();
                                    if (t) O();
                                    return true
                                }
                            }, {
                                key: "move",
                                value: function e(t) {
                                    var a = this;
                                    if (!(typeof this.element.parentNode !== "undefined")) return;
                                    var n = {};
                                    for (var i in t) {
                                        n[i] = {};
                                        for (var r in t[i]) {
                                            var o = false;
                                            for (var s = 0; s < this.history.length; ++s) {
                                                var l = this.history[s];
                                                if (typeof l[i] !== "undefined" && !w(l[i][r], t[i][r])) {
                                                    o = true;
                                                    break
                                                }
                                            }
                                            if (!o) n[i][r] = true
                                        }
                                    }
                                    var c = {
                                        top: "",
                                        left: "",
                                        right: "",
                                        bottom: ""
                                    };
                                    var u = function e(t, n) {
                                        var i = typeof a.options.optimizations !== "undefined";
                                        var r = i ? a.options.optimizations.gpu : null;
                                        if (r !== false) {
                                            var o = undefined,
                                                s = undefined;
                                            if (t.top) {
                                                c.top = 0;
                                                o = n.top
                                            } else {
                                                c.bottom = 0;
                                                o = -n.bottom
                                            }
                                            if (t.left) {
                                                c.left = 0;
                                                s = n.left
                                            } else {
                                                c.right = 0;
                                                s = -n.right
                                            }
                                            if (typeof window.devicePixelRatio === "number" && devicePixelRatio % 1 === 0) {
                                                s = Math.round(s * devicePixelRatio) / devicePixelRatio;
                                                o = Math.round(o * devicePixelRatio) / devicePixelRatio
                                            }
                                            c[S] = "translateX(" + s + "px) translateY(" + o + "px)";
                                            if (S !== "msTransform") c[S] += " translateZ(0)"
                                        } else {
                                            if (t.top) c.top = n.top + "px";
                                            else c.bottom = n.bottom + "px";
                                            if (t.left) c.left = n.left + "px";
                                            else c.right = n.right + "px"
                                        }
                                    };
                                    var f = false;
                                    if ((n.page.top || n.page.bottom) && (n.page.left || n.page.right)) {
                                        c.position = "absolute";
                                        u(n.page, t.page)
                                    } else if ((n.viewport.top || n.viewport.bottom) && (n.viewport.left || n.viewport.right)) {
                                        c.position = "fixed";
                                        u(n.viewport, t.viewport)
                                    } else if (typeof n.offset !== "undefined" && n.offset.top && n.offset.left)(function() {
                                        c.position = "absolute";
                                        var e = a.cache("target-offsetparent", function() {
                                            return C(a.target)
                                        });
                                        if (C(a.element) !== e) k(function() {
                                            a.element.parentNode.removeChild(a.element);
                                            e.appendChild(a.element)
                                        });
                                        u(n.offset, t.offset);
                                        f = true
                                    })();
                                    else {
                                        c.position = "absolute";
                                        u({
                                            top: true,
                                            left: true
                                        }, t.page)
                                    }
                                    if (!f)
                                        if (this.options.bodyElement) {
                                            if (this.element.parentNode !== this.options.bodyElement) this.options.bodyElement.appendChild(this.element)
                                        } else {
                                            var d = function e(t) {
                                                var n = t.ownerDocument;
                                                var i = n.fullscreenElement || n.webkitFullscreenElement || n.mozFullScreenElement || n.msFullscreenElement;
                                                return i === t
                                            };
                                            var p = true;
                                            var h = this.element.parentNode;
                                            while (h && h.nodeType === 1 && h.tagName !== "BODY" && !d(h)) {
                                                if (getComputedStyle(h).position !== "static") {
                                                    p = false;
                                                    break
                                                }
                                                h = h.parentNode
                                            }
                                            if (!p) {
                                                this.element.parentNode.removeChild(this.element);
                                                this.element.ownerDocument.body.appendChild(this.element)
                                            }
                                        } var m = {};
                                    var g = false;
                                    for (var r in c) {
                                        var y = c[r];
                                        var v = this.element.style[r];
                                        if (v !== y) {
                                            g = true;
                                            m[r] = y
                                        }
                                    }
                                    if (g) k(function() {
                                        x(a.element.style, m);
                                        a.trigger("repositioned")
                                    })
                                }
                            }]);
                            return n
                        }(e);
                    q.modules = [], _.position = D;
                    var z = x(q, _);
                    "use strict";
                    var I = function() {
                            function n(e, t) {
                                var n = [];
                                var i = true;
                                var r = false;
                                var o = undefined;
                                try {
                                    for (var s = e[Symbol.iterator](), a; !(i = (a = s.next()).done); i = true) {
                                        n.push(a.value);
                                        if (t && n.length === t) break
                                    }
                                } catch (e) {
                                    r = true;
                                    o = e
                                } finally {
                                    try {
                                        if (!i && s["return"]) s["return"]()
                                    } finally {
                                        if (r) throw o
                                    }
                                }
                                return n
                            }
                            return function(e, t) {
                                if (Array.isArray(e)) return e;
                                else if (Symbol.iterator in Object(e)) return n(e, t);
                                else throw new TypeError("Invalid attempt to destructure non-iterable instance")
                            }
                        }(),
                        b, T = (b = _.Utils).getBounds,
                        x = b.extend,
                        A = b.updateClasses,
                        k = b.defer,
                        U = ["left", "top", "right", "bottom"];

                    function $(e, o) {
                        if (o === "scrollParent") o = e.scrollParents[0];
                        else if (o === "window") o = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
                        if (o === document) o = o.documentElement;
                        if (typeof o.nodeType !== "undefined")(function() {
                            var e = o;
                            var t = T(o);
                            var n = t;
                            var i = getComputedStyle(o);
                            o = [n.left, n.top, t.width + n.left, t.height + n.top];
                            if (e.ownerDocument !== document) {
                                var r = e.ownerDocument.defaultView;
                                o[0] += r.pageXOffset;
                                o[1] += r.pageYOffset;
                                o[2] += r.pageXOffset;
                                o[3] += r.pageYOffset
                            }
                            U.forEach(function(e, t) {
                                e = e[0].toUpperCase() + e.substr(1);
                                if (e === "Top" || e === "Left") o[t] += parseFloat(i["border" + e + "Width"]);
                                else o[t] -= parseFloat(i["border" + e + "Width"])
                            })
                        })();
                        return o
                    }
                    _.modules.push({
                        position: function e(t) {
                            var f = this;
                            var d = t.top;
                            var p = t.left;
                            var h = t.targetAttachment;
                            if (!this.options.constraints) return true;
                            var n = this.cache("element-bounds", function() {
                                return T(f.element)
                            });
                            var m = n.height;
                            var g = n.width;
                            if (g === 0 && m === 0 && typeof this.lastSize !== "undefined") {
                                var i = this.lastSize;
                                g = i.width;
                                m = i.height
                            }
                            var r = this.cache("target-bounds", function() {
                                return f.getTargetBounds()
                            });
                            var y = r.height;
                            var v = r.width;
                            var o = [this.getClass("pinned"), this.getClass("out-of-bounds")];
                            this.options.constraints.forEach(function(e) {
                                var t = e.outOfBoundsClass;
                                var n = e.pinnedClass;
                                if (t) o.push(t);
                                if (n) o.push(n)
                            });
                            o.forEach(function(t) {
                                ["left", "top", "right", "bottom"].forEach(function(e) {
                                    o.push(t + "-" + e)
                                })
                            });
                            var b = [];
                            var w = x({}, h);
                            var S = x({}, this.attachment);
                            this.options.constraints.forEach(function(e) {
                                var t = e.to;
                                var n = e.attachment;
                                var i = e.pin;
                                if (typeof n === "undefined") n = "";
                                var r = undefined,
                                    o = undefined;
                                if (n.indexOf(" ") >= 0) {
                                    var s = n.split(" ");
                                    var a = I(s, 2);
                                    o = a[0];
                                    r = a[1]
                                } else r = o = n;
                                var l = $(f, t);
                                if (o === "target" || o === "both") {
                                    if (d < l[1] && w.top === "top") {
                                        d += y;
                                        w.top = "bottom"
                                    }
                                    if (d + m > l[3] && w.top === "bottom") {
                                        d -= y;
                                        w.top = "top"
                                    }
                                }
                                if (o === "together") {
                                    if (w.top === "top")
                                        if (S.top === "bottom" && d < l[1]) {
                                            d += y;
                                            w.top = "bottom";
                                            d += m;
                                            S.top = "top"
                                        } else if (S.top === "top" && d + m > l[3] && d - (m - y) >= l[1]) {
                                        d -= m - y;
                                        w.top = "bottom";
                                        S.top = "bottom"
                                    }
                                    if (w.top === "bottom")
                                        if (S.top === "top" && d + m > l[3]) {
                                            d -= y;
                                            w.top = "top";
                                            d -= m;
                                            S.top = "bottom"
                                        } else if (S.top === "bottom" && d < l[1] && d + (m * 2 - y) <= l[3]) {
                                        d += m - y;
                                        w.top = "top";
                                        S.top = "top"
                                    }
                                    if (w.top === "middle")
                                        if (d + m > l[3] && S.top === "top") {
                                            d -= m;
                                            S.top = "bottom"
                                        } else if (d < l[1] && S.top === "bottom") {
                                        d += m;
                                        S.top = "top"
                                    }
                                }
                                if (r === "target" || r === "both") {
                                    if (p < l[0] && w.left === "left") {
                                        p += v;
                                        w.left = "right"
                                    }
                                    if (p + g > l[2] && w.left === "right") {
                                        p -= v;
                                        w.left = "left"
                                    }
                                }
                                if (r === "together")
                                    if (p < l[0] && w.left === "left") {
                                        if (S.left === "right") {
                                            p += v;
                                            w.left = "right";
                                            p += g;
                                            S.left = "left"
                                        } else if (S.left === "left") {
                                            p += v;
                                            w.left = "right";
                                            p -= g;
                                            S.left = "right"
                                        }
                                    } else if (p + g > l[2] && w.left === "right") {
                                    if (S.left === "left") {
                                        p -= v;
                                        w.left = "left";
                                        p -= g;
                                        S.left = "right"
                                    } else if (S.left === "right") {
                                        p -= v;
                                        w.left = "left";
                                        p += g;
                                        S.left = "left"
                                    }
                                } else if (w.left === "center")
                                    if (p + g > l[2] && S.left === "left") {
                                        p -= g;
                                        S.left = "right"
                                    } else if (p < l[0] && S.left === "right") {
                                    p += g;
                                    S.left = "left"
                                }
                                if (o === "element" || o === "both") {
                                    if (d < l[1] && S.top === "bottom") {
                                        d += m;
                                        S.top = "top"
                                    }
                                    if (d + m > l[3] && S.top === "top") {
                                        d -= m;
                                        S.top = "bottom"
                                    }
                                }
                                if (r === "element" || r === "both") {
                                    if (p < l[0])
                                        if (S.left === "right") {
                                            p += g;
                                            S.left = "left"
                                        } else if (S.left === "center") {
                                        p += g / 2;
                                        S.left = "left"
                                    }
                                    if (p + g > l[2])
                                        if (S.left === "left") {
                                            p -= g;
                                            S.left = "right"
                                        } else if (S.left === "center") {
                                        p -= g / 2;
                                        S.left = "right"
                                    }
                                }
                                if (typeof i === "string") i = i.split(",").map(function(e) {
                                    return e.trim()
                                });
                                else if (i === true) i = ["top", "left", "right", "bottom"];
                                i = i || [];
                                var c = [];
                                var u = [];
                                if (d < l[1])
                                    if (i.indexOf("top") >= 0) {
                                        d = l[1];
                                        c.push("top")
                                    } else u.push("top");
                                if (d + m > l[3])
                                    if (i.indexOf("bottom") >= 0) {
                                        d = l[3] - m;
                                        c.push("bottom")
                                    } else u.push("bottom");
                                if (p < l[0])
                                    if (i.indexOf("left") >= 0) {
                                        p = l[0];
                                        c.push("left")
                                    } else u.push("left");
                                if (p + g > l[2])
                                    if (i.indexOf("right") >= 0) {
                                        p = l[2] - g;
                                        c.push("right")
                                    } else u.push("right");
                                if (c.length)(function() {
                                    var t = undefined;
                                    if (typeof f.options.pinnedClass !== "undefined") t = f.options.pinnedClass;
                                    else t = f.getClass("pinned");
                                    b.push(t);
                                    c.forEach(function(e) {
                                        b.push(t + "-" + e)
                                    })
                                })();
                                if (u.length)(function() {
                                    var t = undefined;
                                    if (typeof f.options.outOfBoundsClass !== "undefined") t = f.options.outOfBoundsClass;
                                    else t = f.getClass("out-of-bounds");
                                    b.push(t);
                                    u.forEach(function(e) {
                                        b.push(t + "-" + e)
                                    })
                                })();
                                if (c.indexOf("left") >= 0 || c.indexOf("right") >= 0) S.left = w.left = false;
                                if (c.indexOf("top") >= 0 || c.indexOf("bottom") >= 0) S.top = w.top = false;
                                if (w.top !== h.top || w.left !== h.left || S.top !== f.attachment.top || S.left !== f.attachment.left) {
                                    f.updateAttachClasses(S, w);
                                    f.trigger("update", {
                                        attachment: S,
                                        targetAttachment: w
                                    })
                                }
                            });
                            k(function() {
                                if (!(f.options.addTargetClasses === false)) A(f.target, b, o);
                                A(f.element, b, o)
                            });
                            return {
                                top: d,
                                left: p
                            }
                        }
                    });
                    var b, T = (b = _.Utils).getBounds,
                        A = b.updateClasses,
                        k = b.defer;
                    _.modules.push({
                        position: function e(t) {
                            var n = this;
                            var i = t.top;
                            var r = t.left;
                            var o = this.cache("element-bounds", function() {
                                return T(n.element)
                            });
                            var s = o.height;
                            var a = o.width;
                            var l = this.getTargetBounds();
                            var c = i + s;
                            var u = r + a;
                            var f = [];
                            if (i <= l.bottom && c >= l.top)["left", "right"].forEach(function(e) {
                                var t = l[e];
                                if (t === r || t === u) f.push(e)
                            });
                            if (r <= l.right && u >= l.left)["top", "bottom"].forEach(function(e) {
                                var t = l[e];
                                if (t === i || t === c) f.push(e)
                            });
                            var d = [];
                            var p = [];
                            var h = ["left", "top", "right", "bottom"];
                            d.push(this.getClass("abutted"));
                            h.forEach(function(e) {
                                d.push(n.getClass("abutted") + "-" + e)
                            });
                            if (f.length) p.push(this.getClass("abutted"));
                            f.forEach(function(e) {
                                p.push(n.getClass("abutted") + "-" + e)
                            });
                            k(function() {
                                if (!(n.options.addTargetClasses === false)) A(n.target, p, d);
                                A(n.element, p, d)
                            });

                            return true
                        }
                    });
                    var I = function() {
                        function n(e, t) {
                            var n = [];
                            var i = true;
                            var r = false;
                            var o = undefined;
                            try {
                                for (var s = e[Symbol.iterator](), a; !(i = (a = s.next()).done); i = true) {
                                    n.push(a.value);
                                    if (t && n.length === t) break
                                }
                            } catch (e) {
                                r = true;
                                o = e
                            } finally {
                                try {
                                    if (!i && s["return"]) s["return"]()
                                } finally {
                                    if (r) throw o
                                }
                            }
                            return n
                        }
                        return function(e, t) {
                            if (Array.isArray(e)) return e;
                            else if (Symbol.iterator in Object(e)) return n(e, t);
                            else throw new TypeError("Invalid attempt to destructure non-iterable instance")
                        }
                    }();
                    return _.modules.push({
                        position: function e(t) {
                            var n = t.top;
                            var i = t.left;
                            if (!this.options.shift) return;
                            var r = this.options.shift;
                            if (typeof this.options.shift === "function") r = this.options.shift.call(this, {
                                top: n,
                                left: i
                            });
                            var o = undefined,
                                s = undefined;
                            if (typeof r === "string") {
                                r = r.split(" ");
                                r[1] = r[1] || r[0];
                                var a = r;
                                var l = I(a, 2);
                                o = l[0];
                                s = l[1];
                                o = parseFloat(o, 10);
                                s = parseFloat(s, 10)
                            } else {
                                o = r.top;
                                s = r.left
                            }
                            n += o;
                            i += s;
                            return {
                                top: n,
                                left: i
                            }
                        }
                    }), z
                }) ? n.apply(t, []) : n) || (e.exports = n)
            },
            225: function(t, n, i) {
                var r;

                function u(e) {
                    return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                t = i.nmd(t),
                    function(t) {
                        "use strict";
                        if (!t.jQuery) {
                            var c = function e(t, n) {
                                return new e.fn.init(t, n)
                            };
                            c.isWindow = function(e) {
                                return e && e === e.window
                            }, c.type = function(e) {
                                return e ? "object" === u(e) || "function" == typeof e ? n[o.call(e)] || "object" : u(e) : e + ""
                            }, c.isArray = Array.isArray || function(e) {
                                return "array" === c.type(e)
                            }, c.isPlainObject = function(e) {
                                if (!e || "object" !== c.type(e) || e.nodeType || c.isWindow(e)) return !1;
                                try {
                                    if (e.constructor && !i.call(e, "constructor") && !i.call(e.constructor.prototype, "isPrototypeOf")) return !1
                                } catch (e) {
                                    return !1
                                }
                                for (var t in e);
                                return void 0 === t || i.call(e, t)
                            }, c.each = function(e, t, n) {
                                var i = 0,
                                    r = e.length,
                                    o = a(e);
                                if (n) {
                                    if (o)
                                        for (; i < r && !1 !== t.apply(e[i], n); i++);
                                    else
                                        for (i in e)
                                            if (e.hasOwnProperty(i) && !1 === t.apply(e[i], n)) break
                                } else if (o)
                                    for (; i < r && !1 !== t.call(e[i], i, e[i]); i++);
                                else
                                    for (i in e)
                                        if (e.hasOwnProperty(i) && !1 === t.call(e[i], i, e[i])) break;
                                return e
                            }, c.data = function(e, t, n) {
                                if (void 0 === n) {
                                    var i = e[c.expando],
                                        i = i && r[i];
                                    return void 0 === t ? i : i && t in i ? i[t] : void 0
                                }
                                if (void 0 !== t) {
                                    e = e[c.expando] || (e[c.expando] = ++c.uuid);
                                    return r[e] = r[e] || {}, r[e][t] = n
                                }
                            }, c.removeData = function(e, t) {
                                var e = e[c.expando],
                                    n = e && r[e];
                                n && (t ? c.each(t, function(e, t) {
                                    delete n[t]
                                }) : delete r[e])
                            }, c.extend = function() {
                                var e, t, n, i, r, o = arguments[0] || {},
                                    s = 1,
                                    a = arguments.length,
                                    l = !1;
                                for ("boolean" == typeof o && (l = o, o = arguments[s] || {}, s++), "object" !== u(o) && "function" !== c.type(o) && (o = {}), s === a && (o = this, s--); s < a; s++)
                                    if (i = arguments[s])
                                        for (n in i) i.hasOwnProperty(n) && (r = o[n], o !== (t = i[n]) && (l && t && (c.isPlainObject(t) || (e = c.isArray(t))) ? (r = e ? (e = !1, r && c.isArray(r) ? r : []) : r && c.isPlainObject(r) ? r : {}, o[n] = c.extend(l, r, t)) : void 0 !== t && (o[n] = t)));
                                return o
                            }, c.queue = function(e, t, n) {
                                function i(e, t) {
                                    t = t || [];
                                    return e && (a(Object(e)) ? function(e, t) {
                                        for (var n = +t.length, i = 0, r = e.length; i < n;) e[r++] = t[i++];
                                        if (n != n)
                                            for (; void 0 !== t[i];) e[r++] = t[i++];
                                        e.length = r
                                    }(t, "string" == typeof e ? [e] : e) : [].push.call(t, e)), t
                                }
                                if (e) {
                                    var r = c.data(e, t = (t || "fx") + "queue");
                                    return n ? (!r || c.isArray(n) ? r = c.data(e, t, i(n)) : r.push(n), r) : r || []
                                }
                            }, c.dequeue = function(e, r) {
                                c.each(e.nodeType ? [e] : e, function(e, t) {
                                    r = r || "fx";
                                    var n = c.queue(t, r),
                                        i = n.shift();
                                    (i = "inprogress" === i ? n.shift() : i) && ("fx" === r && n.unshift("inprogress"), i.call(t, function() {
                                        c.dequeue(t, r)
                                    }))
                                })
                            }, c.fn = c.prototype = {
                                init: function(e) {
                                    if (e.nodeType) return this[0] = e, this;
                                    throw new Error("Not a DOM node.")
                                },
                                offset: function() {
                                    var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                                        top: 0,
                                        left: 0
                                    };
                                    return {
                                        top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                                        left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                                    }
                                },
                                position: function() {
                                    var e = this[0],
                                        t = function(e) {
                                            for (var t = e.offsetParent; t && "html" !== t.nodeName.toLowerCase() && t.style && "static" === t.style.position;) t = t.offsetParent;
                                            return t || document
                                        }(e),
                                        n = this.offset(),
                                        i = /^(?:body|html)$/i.test(t.nodeName) ? {
                                            top: 0,
                                            left: 0
                                        } : c(t).offset();
                                    return n.top -= parseFloat(e.style.marginTop) || 0, n.left -= parseFloat(e.style.marginLeft) || 0, t.style && (i.top += parseFloat(t.style.borderTopWidth) || 0, i.left += parseFloat(t.style.borderLeftWidth) || 0), {
                                        top: n.top - i.top,
                                        left: n.left - i.left
                                    }
                                }
                            };
                            var r = {};
                            c.expando = "velocity" + (new Date).getTime(), c.uuid = 0;
                            for (var n = {}, i = n.hasOwnProperty, o = n.toString, e = "Boolean Number String Function Array Date RegExp Object Error".split(" "), s = 0; s < e.length; s++) n["[object " + e[s] + "]"] = e[s].toLowerCase();
                            c.fn.init.prototype = c.fn, t.Velocity = {
                                Utilities: c
                            }
                        }

                        function a(e) {
                            var t = e.length,
                                n = c.type(e);
                            return "function" !== n && !c.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e))
                        }
                    }(window),
                    function(e) {
                        "use strict";
                        "object" === u(t) && "object" === u(t.exports) ? t.exports = e() : void 0 === (r = "function" == typeof(r = e) ? r.call(n, i, n, t) : r) || (t.exports = r)
                    }(function() {
                        "use strict";
                        return function(e, H, R, q) {
                            var i, t, T = function() {
                                    if (R.documentMode) return R.documentMode;
                                    for (var e = 7; 4 < e; e--) {
                                        var t = R.createElement("div");
                                        if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e", t.getElementsByTagName("span").length) return t = null, e
                                    }
                                    return q
                                }(),
                                n = (i = 0, H.webkitRequestAnimationFrame || H.mozRequestAnimationFrame || function(e) {
                                    var t = (new Date).getTime(),
                                        n = Math.max(0, 16 - (t - i));
                                    return i = t + n, setTimeout(function() {
                                        e(t + n)
                                    }, n)
                                }),
                                C = ("function" != typeof(l = H.performance || {}).now && (t = l.timing && l.timing.navigationStart ? l.timing.navigationStart : (new Date).getTime(), l.now = function() {
                                    return (new Date).getTime() - t
                                }), l);

                            function z() {
                                return Array.prototype.includes ? function(e, t) {
                                    return e.includes(t)
                                } : Array.prototype.indexOf ? function(e, t) {
                                    return 0 <= e.indexOf(t)
                                } : function(e, t) {
                                    for (var n = 0; n < e.length; n++)
                                        if (e[n] === t) return !0;
                                    return !1
                                }
                            }
                            var r = function() {
                                var a = Array.prototype.slice;
                                try {
                                    return a.call(R.documentElement), a
                                } catch (e) {
                                    return function(e, t) {
                                        var n = this.length;
                                        if ("number" != typeof e && (e = 0), "number" != typeof t && (t = n), this.slice) return a.call(this, e, t);
                                        var i, r = [],
                                            o = 0 <= e ? e : Math.max(0, n + e),
                                            s = (t < 0 ? n + t : Math.min(t, n)) - o;
                                        if (0 < s)
                                            if (r = new Array(s), this.charAt)
                                                for (i = 0; i < s; i++) r[i] = this.charAt(o + i);
                                            else
                                                for (i = 0; i < s; i++) r[i] = this[o + i];
                                        return r
                                    }
                                }
                            }();

                            function y(e) {
                                return $.isWrapped(e) ? e = r.call(e) : $.isNode(e) && (e = [e]), e
                            }
                            var U, $ = {
                                    isNumber: function(e) {
                                        return "number" == typeof e
                                    },
                                    isString: function(e) {
                                        return "string" == typeof e
                                    },
                                    isArray: Array.isArray || function(e) {
                                        return "[object Array]" === Object.prototype.toString.call(e)
                                    },
                                    isFunction: function(e) {
                                        return "[object Function]" === Object.prototype.toString.call(e)
                                    },
                                    isNode: function(e) {
                                        return e && e.nodeType
                                    },
                                    isWrapped: function(e) {
                                        return e && e !== H && $.isNumber(e.length) && !$.isString(e) && !$.isFunction(e) && !$.isNode(e) && (0 === e.length || $.isNode(e[0]))
                                    },
                                    isSVG: function(e) {
                                        return H.SVGElement && e instanceof H.SVGElement
                                    },
                                    isEmptyObject: function(e) {
                                        for (var t in e)
                                            if (e.hasOwnProperty(t)) return !1;
                                        return !0
                                    }
                                },
                                o = !1;
                            if (e.fn && e.fn.jquery ? (U = e, o = !0) : U = H.Velocity.Utilities, T <= 8 && !o) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
                            if (!(T <= 7)) {
                                var s = "swing",
                                    Q = {
                                        State: {
                                            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                                            isAndroid: /Android/i.test(navigator.userAgent),
                                            isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                                            isChrome: H.chrome,
                                            isFirefox: /Firefox/i.test(navigator.userAgent),
                                            prefixElement: R.createElement("div"),
                                            prefixMatches: {},
                                            scrollAnchor: null,
                                            scrollPropertyLeft: null,
                                            scrollPropertyTop: null,
                                            isTicking: !1,
                                            calls: [],
                                            delayedElements: {
                                                count: 0
                                            }
                                        },
                                        CSS: {},
                                        Utilities: U,
                                        Redirects: {},
                                        Easings: {},
                                        Promise: H.Promise,
                                        defaults: {
                                            queue: "",
                                            duration: 400,
                                            easing: s,
                                            begin: q,
                                            complete: q,
                                            progress: q,
                                            display: q,
                                            visibility: q,
                                            loop: !1,
                                            delay: !1,
                                            mobileHA: !0,
                                            _cacheValues: !0,
                                            promiseRejectEmpty: !0
                                        },
                                        init: function(e) {
                                            U.data(e, "velocity", {
                                                isSVG: $.isSVG(e),
                                                isAnimating: !1,
                                                computedStyle: null,
                                                tweensContainer: null,
                                                rootPropertyValueCache: {},
                                                transformCache: {}
                                            })
                                        },
                                        hook: null,
                                        mock: !1,
                                        version: {
                                            major: 1,
                                            minor: 5,
                                            patch: 0
                                        },
                                        debug: !1,
                                        timestamp: !0,
                                        pauseAll: function(n) {
                                            var i = (new Date).getTime();
                                            U.each(Q.State.calls, function(e, t) {
                                                if (t) {
                                                    if (n !== q && (t[2].queue !== n || !1 === t[2].queue)) return !0;
                                                    t[5] = {
                                                        resume: !1
                                                    }
                                                }
                                            }), U.each(Q.State.delayedElements, function(e, t) {
                                                t && v(t, i)
                                            })
                                        },
                                        resumeAll: function(n) {
                                            var e = (new Date).getTime();
                                            U.each(Q.State.calls, function(e, t) {
                                                if (t) {
                                                    if (n !== q && (t[2].queue !== n || !1 === t[2].queue)) return !0;
                                                    t[5] && (t[5].resume = !0)
                                                }
                                            }), U.each(Q.State.delayedElements, function(e, t) {
                                                t && b(t)
                                            })
                                        }
                                    };
                                H.pageYOffset !== q ? (Q.State.scrollAnchor = H, Q.State.scrollPropertyLeft = "pageXOffset", Q.State.scrollPropertyTop = "pageYOffset") : (Q.State.scrollAnchor = R.documentElement || R.body.parentNode || R.body, Q.State.scrollPropertyLeft = "scrollLeft", Q.State.scrollPropertyTop = "scrollTop");
                                var a = function e(t, n, i) {
                                    var r, o, s, a, l, c, u, f, d, p, h = {
                                            x: -1,
                                            v: 0,
                                            tension: null,
                                            friction: null
                                        },
                                        m = [0],
                                        g = 0;
                                    for (t = parseFloat(t) || 500, n = parseFloat(n) || 20, i = i || null, h.tension = t, h.friction = n, o = (r = null !== i) ? (g = e(t, n)) / i * .016 : .016; l = o, d = p = d = f = u = c = void 0, c = {
                                            dx: (a = s || h).v,
                                            dv: w(a)
                                        }, u = S(a, .5 * l, c), f = S(a, .5 * l, u), d = S(a, l, f), p = 1 / 6 * (c.dx + 2 * (u.dx + f.dx) + d.dx), d = 1 / 6 * (c.dv + 2 * (u.dv + f.dv) + d.dv), a.x = a.x + p * l, a.v = a.v + d * l, m.push(1 + (s = a).x), g += 16, 1e-4 < Math.abs(s.x) && 1e-4 < Math.abs(s.v););
                                    return r ? function(e) {
                                        return m[e * (m.length - 1) | 0]
                                    } : g
                                };
                                Q.Easings = {
                                    linear: function(e) {
                                        return e
                                    },
                                    swing: function(e) {
                                        return .5 - Math.cos(e * Math.PI) / 2
                                    },
                                    spring: function(e) {
                                        return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
                                    }
                                }, U.each([
                                    ["ease", [.25, .1, .25, 1]],
                                    ["ease-in", [.42, 0, 1, 1]],
                                    ["ease-out", [0, 0, .58, 1]],
                                    ["ease-in-out", [.42, 0, .58, 1]],
                                    ["easeInSine", [.47, 0, .745, .715]],
                                    ["easeOutSine", [.39, .575, .565, 1]],
                                    ["easeInOutSine", [.445, .05, .55, .95]],
                                    ["easeInQuad", [.55, .085, .68, .53]],
                                    ["easeOutQuad", [.25, .46, .45, .94]],
                                    ["easeInOutQuad", [.455, .03, .515, .955]],
                                    ["easeInCubic", [.55, .055, .675, .19]],
                                    ["easeOutCubic", [.215, .61, .355, 1]],
                                    ["easeInOutCubic", [.645, .045, .355, 1]],
                                    ["easeInQuart", [.895, .03, .685, .22]],
                                    ["easeOutQuart", [.165, .84, .44, 1]],
                                    ["easeInOutQuart", [.77, 0, .175, 1]],
                                    ["easeInQuint", [.755, .05, .855, .06]],
                                    ["easeOutQuint", [.23, 1, .32, 1]],
                                    ["easeInOutQuint", [.86, 0, .07, 1]],
                                    ["easeInExpo", [.95, .05, .795, .035]],
                                    ["easeOutExpo", [.19, 1, .22, 1]],
                                    ["easeInOutExpo", [1, 0, 0, 1]],
                                    ["easeInCirc", [.6, .04, .98, .335]],
                                    ["easeOutCirc", [.075, .82, .165, 1]],
                                    ["easeInOutCirc", [.785, .135, .15, .86]]
                                ], function(e, t) {
                                    Q.Easings[t[0]] = c.apply(null, t[1])
                                });
                                var Y = Q.CSS = {
                                    RegEx: {
                                        isHex: /^#([A-f\d]{3}){1,2}$/i,
                                        valueUnwrap: /^[A-z]+\((.*)\)$/i,
                                        wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                                        valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                                    },
                                    Lists: {
                                        colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                                        transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                                        transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
                                        units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
                                        colorNames: {
                                            aliceblue: "240,248,255",
                                            antiquewhite: "250,235,215",
                                            aquamarine: "127,255,212",
                                            aqua: "0,255,255",
                                            azure: "240,255,255",
                                            beige: "245,245,220",
                                            bisque: "255,228,196",
                                            black: "0,0,0",
                                            blanchedalmond: "255,235,205",
                                            blueviolet: "138,43,226",
                                            blue: "0,0,255",
                                            brown: "165,42,42",
                                            burlywood: "222,184,135",
                                            cadetblue: "95,158,160",
                                            chartreuse: "127,255,0",
                                            chocolate: "210,105,30",
                                            coral: "255,127,80",
                                            cornflowerblue: "100,149,237",
                                            cornsilk: "255,248,220",
                                            crimson: "220,20,60",
                                            cyan: "0,255,255",
                                            darkblue: "0,0,139",
                                            darkcyan: "0,139,139",
                                            darkgoldenrod: "184,134,11",
                                            darkgray: "169,169,169",
                                            darkgrey: "169,169,169",
                                            darkgreen: "0,100,0",
                                            darkkhaki: "189,183,107",
                                            darkmagenta: "139,0,139",
                                            darkolivegreen: "85,107,47",
                                            darkorange: "255,140,0",
                                            darkorchid: "153,50,204",
                                            darkred: "139,0,0",
                                            darksalmon: "233,150,122",
                                            darkseagreen: "143,188,143",
                                            darkslateblue: "72,61,139",
                                            darkslategray: "47,79,79",
                                            darkturquoise: "0,206,209",
                                            darkviolet: "148,0,211",
                                            deeppink: "255,20,147",
                                            deepskyblue: "0,191,255",
                                            dimgray: "105,105,105",
                                            dimgrey: "105,105,105",
                                            dodgerblue: "30,144,255",
                                            firebrick: "178,34,34",
                                            floralwhite: "255,250,240",
                                            forestgreen: "34,139,34",
                                            fuchsia: "255,0,255",
                                            gainsboro: "220,220,220",
                                            ghostwhite: "248,248,255",
                                            gold: "255,215,0",
                                            goldenrod: "218,165,32",
                                            gray: "128,128,128",
                                            grey: "128,128,128",
                                            greenyellow: "173,255,47",
                                            green: "0,128,0",
                                            honeydew: "240,255,240",
                                            hotpink: "255,105,180",
                                            indianred: "205,92,92",
                                            indigo: "75,0,130",
                                            ivory: "255,255,240",
                                            khaki: "240,230,140",
                                            lavenderblush: "255,240,245",
                                            lavender: "230,230,250",
                                            lawngreen: "124,252,0",
                                            lemonchiffon: "255,250,205",
                                            lightblue: "173,216,230",
                                            lightcoral: "240,128,128",
                                            lightcyan: "224,255,255",
                                            lightgoldenrodyellow: "250,250,210",
                                            lightgray: "211,211,211",
                                            lightgrey: "211,211,211",
                                            lightgreen: "144,238,144",
                                            lightpink: "255,182,193",
                                            lightsalmon: "255,160,122",
                                            lightseagreen: "32,178,170",
                                            lightskyblue: "135,206,250",
                                            lightslategray: "119,136,153",
                                            lightsteelblue: "176,196,222",
                                            lightyellow: "255,255,224",
                                            limegreen: "50,205,50",
                                            lime: "0,255,0",
                                            linen: "250,240,230",
                                            magenta: "255,0,255",
                                            maroon: "128,0,0",
                                            mediumaquamarine: "102,205,170",
                                            mediumblue: "0,0,205",
                                            mediumorchid: "186,85,211",
                                            mediumpurple: "147,112,219",
                                            mediumseagreen: "60,179,113",
                                            mediumslateblue: "123,104,238",
                                            mediumspringgreen: "0,250,154",
                                            mediumturquoise: "72,209,204",
                                            mediumvioletred: "199,21,133",
                                            midnightblue: "25,25,112",
                                            mintcream: "245,255,250",
                                            mistyrose: "255,228,225",
                                            moccasin: "255,228,181",
                                            navajowhite: "255,222,173",
                                            navy: "0,0,128",
                                            oldlace: "253,245,230",
                                            olivedrab: "107,142,35",
                                            olive: "128,128,0",
                                            orangered: "255,69,0",
                                            orange: "255,165,0",
                                            orchid: "218,112,214",
                                            palegoldenrod: "238,232,170",
                                            palegreen: "152,251,152",
                                            paleturquoise: "175,238,238",
                                            palevioletred: "219,112,147",
                                            papayawhip: "255,239,213",
                                            peachpuff: "255,218,185",
                                            peru: "205,133,63",
                                            pink: "255,192,203",
                                            plum: "221,160,221",
                                            powderblue: "176,224,230",
                                            purple: "128,0,128",
                                            red: "255,0,0",
                                            rosybrown: "188,143,143",
                                            royalblue: "65,105,225",
                                            saddlebrown: "139,69,19",
                                            salmon: "250,128,114",
                                            sandybrown: "244,164,96",
                                            seagreen: "46,139,87",
                                            seashell: "255,245,238",
                                            sienna: "160,82,45",
                                            silver: "192,192,192",
                                            skyblue: "135,206,235",
                                            slateblue: "106,90,205",
                                            slategray: "112,128,144",
                                            snow: "255,250,250",
                                            springgreen: "0,255,127",
                                            steelblue: "70,130,180",
                                            tan: "210,180,140",
                                            teal: "0,128,128",
                                            thistle: "216,191,216",
                                            tomato: "255,99,71",
                                            turquoise: "64,224,208",
                                            violet: "238,130,238",
                                            wheat: "245,222,179",
                                            whitesmoke: "245,245,245",
                                            white: "255,255,255",
                                            yellowgreen: "154,205,50",
                                            yellow: "255,255,0"
                                        }
                                    },
                                    Hooks: {
                                        templates: {
                                            textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                                            boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                                            clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                                            backgroundPosition: ["X Y", "0% 0%"],
                                            transformOrigin: ["X Y Z", "50% 50% 0px"],
                                            perspectiveOrigin: ["X Y", "50% 50%"]
                                        },
                                        registered: {},
                                        register: function() {
                                            for (var e, t, n, i, r, o = 0; o < Y.Lists.colors.length; o++) {
                                                var s = "color" === Y.Lists.colors[o] ? "0 0 0 1" : "255 255 255 1";
                                                Y.Hooks.templates[Y.Lists.colors[o]] = ["Red Green Blue Alpha", s]
                                            }
                                            if (T)
                                                for (e in Y.Hooks.templates) Y.Hooks.templates.hasOwnProperty(e) && (n = (t = Y.Hooks.templates[e])[0].split(" "), i = t[1].match(Y.RegEx.valueSplit), "Color" === n[0] && (n.push(n.shift()), i.push(i.shift()), Y.Hooks.templates[e] = [n.join(" "), i.join(" ")]));
                                            for (e in Y.Hooks.templates)
                                                if (Y.Hooks.templates.hasOwnProperty(e))
                                                    for (var a in n = (t = Y.Hooks.templates[e])[0].split(" ")) n.hasOwnProperty(a) && (r = e + n[a], Y.Hooks.registered[r] = [e, a])
                                        },
                                        getRoot: function(e) {
                                            var t = Y.Hooks.registered[e];
                                            return t ? t[0] : e
                                        },
                                        getUnit: function(e, t) {
                                            t = (e.substr(t || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
                                            return t && z(Y.Lists.units) ? t : ""
                                        },
                                        fixColors: function(e) {
                                            return e.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function(e, t, n) {
                                                return Y.Lists.colorNames.hasOwnProperty(n) ? (t || "rgba(") + Y.Lists.colorNames[n] + (t ? "" : ",1)") : t + n
                                            })
                                        },
                                        cleanRootPropertyValue: function(e, t) {
                                            return Y.RegEx.valueUnwrap.test(t) && (t = t.match(Y.RegEx.valueUnwrap)[1]), t = Y.Values.isCSSNullValue(t) ? Y.Hooks.templates[e][1] : t
                                        },
                                        extractValue: function(e, t) {
                                            var n = Y.Hooks.registered[e];
                                            if (n) {
                                                e = n[0], n = n[1];
                                                return (t = Y.Hooks.cleanRootPropertyValue(e, t)).toString().match(Y.RegEx.valueSplit)[n]
                                            }
                                            return t
                                        },
                                        injectValue: function(e, t, n) {
                                            var i = Y.Hooks.registered[e];
                                            if (i) {
                                                e = i[0], i = i[1];
                                                return (e = (n = Y.Hooks.cleanRootPropertyValue(e, n)).toString().match(Y.RegEx.valueSplit))[i] = t, e.join(" ")
                                            }
                                            return n
                                        }
                                    },
                                    Normalizations: {
                                        registered: {
                                            clip: function(e, t, n) {
                                                switch (e) {
                                                    case "name":
                                                        return "clip";
                                                    case "extract":
                                                        var i = !Y.RegEx.wrappedValueAlreadyExtracted.test(n) && (i = n.toString().match(Y.RegEx.valueUnwrap)) ? i[1].replace(/,(\s+)?/g, " ") : n;
                                                        return i;
                                                    case "inject":
                                                        return "rect(" + n + ")"
                                                }
                                            },
                                            blur: function(e, t, n) {
                                                switch (e) {
                                                    case "name":
                                                        return Q.State.isFirefox ? "filter" : "-webkit-filter";
                                                    case "extract":
                                                        var i, r = parseFloat(n);
                                                        return r = !r && 0 !== r ? (i = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i)) ? i[1] : 0 : r;
                                                    case "inject":
                                                        return parseFloat(n) ? "blur(" + n + ")" : "none"
                                                }
                                            },
                                            opacity: function(e, t, n) {
                                                if (T <= 8) switch (e) {
                                                    case "name":
                                                        return "filter";
                                                    case "extract":
                                                        var i = n.toString().match(/alpha\(opacity=(.*)\)/i);
                                                        return n = i ? i[1] / 100 : 1;
                                                    case "inject":
                                                        return (t.style.zoom = 1) <= parseFloat(n) ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                                                } else switch (e) {
                                                    case "name":
                                                        return "opacity";
                                                    case "extract":
                                                    case "inject":
                                                        return n
                                                }
                                            }
                                        },
                                        register: function() {
                                            T && !(9 < T) || Q.State.isGingerbread || (Y.Lists.transformsBase = Y.Lists.transformsBase.concat(Y.Lists.transforms3D));
                                            for (var e = 0; e < Y.Lists.transformsBase.length; e++) ! function() {
                                                var r = Y.Lists.transformsBase[e];
                                                Y.Normalizations.registered[r] = function(e, t, n) {
                                                    switch (e) {
                                                        case "name":
                                                            return "transform";
                                                        case "extract":
                                                            return K(t) === q || K(t).transformCache[r] === q ? /^scale/i.test(r) ? 1 : 0 : K(t).transformCache[r].replace(/[()]/g, "");
                                                        case "inject":
                                                            var i = !1;
                                                            switch (r.substr(0, r.length - 1)) {
                                                                case "translate":
                                                                    i = !/(%|px|em|rem|vw|vh|\d)$/i.test(n);
                                                                    break;
                                                                case "scal":
                                                                case "scale":
                                                                    Q.State.isAndroid && K(t).transformCache[r] === q && n < 1 && (n = 1), i = !/(\d)$/i.test(n);
                                                                    break;
                                                                case "skew":
                                                                case "rotate":
                                                                    i = !/(deg|\d)$/i.test(n)
                                                            }
                                                            return i || (K(t).transformCache[r] = "(" + n + ")"), K(t).transformCache[r]
                                                    }
                                                }
                                            }();
                                            for (var t = 0; t < Y.Lists.colors.length; t++) ! function() {
                                                var o = Y.Lists.colors[t];
                                                Y.Normalizations.registered[o] = function(e, t, n) {
                                                    switch (e) {
                                                        case "name":
                                                            return o;
                                                        case "extract":
                                                            var i, r = Y.RegEx.wrappedValueAlreadyExtracted.test(n) ? n : (i = {
                                                                black: "rgb(0, 0, 0)",
                                                                blue: "rgb(0, 0, 255)",
                                                                gray: "rgb(128, 128, 128)",
                                                                green: "rgb(0, 128, 0)",
                                                                red: "rgb(255, 0, 0)",
                                                                white: "rgb(255, 255, 255)"
                                                            }, /^[A-z]+$/i.test(n) ? r = i[n] !== q ? i[n] : i.black : Y.RegEx.isHex.test(n) ? r = "rgb(" + Y.Values.hexToRgb(n).join(" ") + ")" : /^rgba?\(/i.test(n) || (r = i.black), (r || n).toString().match(Y.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " "));
                                                            return (!T || 8 < T) && 3 === r.split(" ").length && (r += " 1"), r;
                                                        case "inject":
                                                            return /^rgb/.test(n) ? n : (T <= 8 ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"), (T <= 8 ? "rgb" : "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")")
                                                    }
                                                }
                                            }();

                                            function o(e, t, n) {
                                                if ("border-box" === Y.getPropertyValue(t, "boxSizing").toString().toLowerCase() !== (n || !1)) return 0;
                                                for (var i, r = 0, e = "width" === e ? ["Left", "Right"] : ["Top", "Bottom"], o = ["padding" + e[0], "padding" + e[1], "border" + e[0] + "Width", "border" + e[1] + "Width"], s = 0; s < o.length; s++) i = parseFloat(Y.getPropertyValue(t, o[s])), isNaN(i) || (r += i);
                                                return n ? -r : r
                                            }

                                            function n(i, r) {
                                                return function(e, t, n) {
                                                    switch (e) {
                                                        case "name":
                                                            return i;
                                                        case "extract":
                                                            return parseFloat(n) + o(i, t, r);
                                                        case "inject":
                                                            return parseFloat(n) - o(i, t, r) + "px"
                                                    }
                                                }
                                            }
                                            Y.Normalizations.registered.innerWidth = n("width", !0), Y.Normalizations.registered.innerHeight = n("height", !0), Y.Normalizations.registered.outerWidth = n("width"), Y.Normalizations.registered.outerHeight = n("height")
                                        }
                                    },
                                    Names: {
                                        camelCase: function(e) {
                                            return e.replace(/-(\w)/g, function(e, t) {
                                                return t.toUpperCase()
                                            })
                                        },
                                        SVGAttribute: function(e) {
                                            var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                                            return (T || Q.State.isAndroid && !Q.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                                        },
                                        prefixCheck: function(e) {
                                            if (Q.State.prefixMatches[e]) return [Q.State.prefixMatches[e], !0];
                                            for (var t = ["", "Webkit", "Moz", "ms", "O"], n = 0, i = t.length; n < i; n++) {
                                                var r = 0 === n ? e : t[n] + e.replace(/^\w/, function(e) {
                                                    return e.toUpperCase()
                                                });
                                                if ($.isString(Q.State.prefixElement.style[r])) return [Q.State.prefixMatches[e] = r, !0]
                                            }
                                            return [e, !1]
                                        }
                                    },
                                    Values: {
                                        hexToRgb: function(e) {
                                            return e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, i) {
                                                return t + t + n + n + i + i
                                            }), (e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)) ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0]
                                        },
                                        isCSSNullValue: function(e) {
                                            return !e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                                        },
                                        getUnitType: function(e) {
                                            return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                                        },
                                        getDisplayType: function(e) {
                                            e = e && e.tagName.toString().toLowerCase();
                                            return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block"
                                        },
                                        addClass: function(e, t) {
                                            var n;
                                            e && (e.classList ? e.classList.add(t) : $.isString(e.className) ? e.className += (e.className.length ? " " : "") + t : (n = e.getAttribute(T <= 7 ? "className" : "class") || "", e.setAttribute("class", n + (n ? " " : "") + t)))
                                        },
                                        removeClass: function(e, t) {
                                            var n;
                                            e && (e.classList ? e.classList.remove(t) : $.isString(e.className) ? e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ") : (n = e.getAttribute(T <= 7 ? "className" : "class") || "", e.setAttribute("class", n.replace(new RegExp("(^|s)" + t.split(" ").join("|") + "(s|$)", "gi"), " "))))
                                        }
                                    },
                                    getPropertyValue: function(e, t, n, a) {
                                        function l(e, t) {
                                            var n = 0;
                                            if (T <= 8) n = U.css(e, t);
                                            else {
                                                var i = !1;
                                                /^(width|height)$/.test(t) && 0 === Y.getPropertyValue(e, "display") && (i = !0, Y.setPropertyValue(e, "display", Y.Values.getDisplayType(e)));
                                                var r = function() {
                                                    i && Y.setPropertyValue(e, "display", "none")
                                                };
                                                if (!a) {
                                                    if ("height" === t && "border-box" !== Y.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                                        var o = e.offsetHeight - (parseFloat(Y.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(Y.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(Y.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(Y.getPropertyValue(e, "paddingBottom")) || 0);
                                                        return r(), o
                                                    }
                                                    if ("width" === t && "border-box" !== Y.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                                        var s = e.offsetWidth - (parseFloat(Y.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(Y.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(Y.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(Y.getPropertyValue(e, "paddingRight")) || 0);
                                                        return r(), s
                                                    }
                                                }
                                                s = K(e) === q ? H.getComputedStyle(e, null) : K(e).computedStyle ? K(e).computedStyle : K(e).computedStyle = H.getComputedStyle(e, null), "borderColor" === t && (t = "borderTopColor"), "" !== (n = 9 === T && "filter" === t ? s.getPropertyValue(t) : s[t]) && null !== n || (n = e.style[t]), r()
                                            }
                                            return "auto" !== n || !/^(top|right|bottom|left)$/i.test(t) || ("fixed" === (r = l(e, "position")) || "absolute" === r && /top|left/i.test(t)) && (n = U(e).position()[t] + "px"), n
                                        }
                                        var i, r;
                                        if (Y.Hooks.registered[t] ? (r = Y.Hooks.getRoot(i = t), n === q && (n = Y.getPropertyValue(e, Y.Names.prefixCheck(r)[0])), Y.Normalizations.registered[r] && (n = Y.Normalizations.registered[r]("extract", e, n)), i = Y.Hooks.extractValue(i, n)) : Y.Normalizations.registered[t] && ("transform" !== (n = Y.Normalizations.registered[t]("name", e)) && (o = l(e, Y.Names.prefixCheck(n)[0]), Y.Values.isCSSNullValue(o) && Y.Hooks.templates[t] && (o = Y.Hooks.templates[t][1])), i = Y.Normalizations.registered[t]("extract", e, o)), !/^[\d-]/.test(i)) {
                                            var o = K(e);
                                            if (o && o.isSVG && Y.Names.SVGAttribute(t))
                                                if (/^(height|width)$/i.test(t)) try {
                                                    i = e.getBBox()[t]
                                                } catch (e) {
                                                    i = 0
                                                } else i = e.getAttribute(t);
                                                else i = l(e, Y.Names.prefixCheck(t)[0])
                                        }
                                        return Y.Values.isCSSNullValue(i) && (i = 0), Q.debug, i
                                    },
                                    setPropertyValue: function(e, t, n, i, r) {
                                        var o = t;
                                        if ("scroll" === t) r.container ? r.container["scroll" + r.direction] = n : "Left" === r.direction ? H.scrollTo(n, r.alternateValue) : H.scrollTo(r.alternateValue, n);
                                        else if (Y.Normalizations.registered[t] && "transform" === Y.Normalizations.registered[t]("name", e)) Y.Normalizations.registered[t]("inject", e, n), o = "transform", n = K(e).transformCache[t];
                                        else {
                                            if (Y.Hooks.registered[t] && (s = Y.Hooks.getRoot(r = t), i = i || Y.getPropertyValue(e, s), n = Y.Hooks.injectValue(r, n, i), t = s), Y.Normalizations.registered[t] && (n = Y.Normalizations.registered[t]("inject", e, n), t = Y.Normalizations.registered[t]("name", e)), o = Y.Names.prefixCheck(t)[0], T <= 8) try {
                                                e.style[o] = n
                                            } catch (e) {
                                                Q.debug
                                            } else {
                                                var s = K(e);
                                                s && s.isSVG && Y.Names.SVGAttribute(t) ? e.setAttribute(t, n) : e.style[o] = n
                                            }
                                            Q.debug
                                        }
                                        return [o, n]
                                    },
                                    flushTransformCache: function(t) {
                                        var n, i, r, o = "",
                                            e = K(t);
                                        (T || Q.State.isAndroid && !Q.State.isChrome) && e && e.isSVG ? (n = {
                                            translate: [(e = function(e) {
                                                return parseFloat(Y.getPropertyValue(t, e))
                                            })("translateX"), e("translateY")],
                                            skewX: [e("skewX")],
                                            skewY: [e("skewY")],
                                            scale: 1 !== e("scale") ? [e("scale"), e("scale")] : [e("scaleX"), e("scaleY")],
                                            rotate: [e("rotateZ"), 0, 0]
                                        }, U.each(K(t).transformCache, function(e) {
                                            /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), n[e] && (o += e + "(" + n[e].join(" ") + ") ", delete n[e])
                                        })) : (U.each(K(t).transformCache, function(e) {
                                            return i = K(t).transformCache[e], "transformPerspective" === e ? (r = i, !0) : void(o += (e = 9 === T && "rotateZ" === e ? "rotate" : e) + i + " ")
                                        }), r && (o = "perspective" + r + " " + o)), Y.setPropertyValue(t, "transform", o)
                                    }
                                };
                                Y.Hooks.register(), Y.Normalizations.register(), Q.hook = function(e, i, r) {
                                    var o;
                                    return e = y(e), U.each(e, function(e, t) {
                                        var n;
                                        K(t) === q && Q.init(t), r === q ? o === q && (o = Y.getPropertyValue(t, i)) : ("transform" === (n = Y.setPropertyValue(t, i, r))[0] && Q.CSS.flushTransformCache(t), o = n)
                                    }), o
                                };
                                var l = function e() {
                                    function t() {
                                        return n ? k.promise || null : i
                                    }
                                    var n, i, r, E, A, o = arguments[0] && (arguments[0].p || U.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || $.isString(arguments[0].properties));
                                    $.isWrapped(this) ? (n = !1, r = 0, i = E = this) : (n = !0, r = 1, E = o ? arguments[0].elements || arguments[0].e : arguments[0]);
                                    var k = {
                                        promise: null,
                                        resolver: null,
                                        rejecter: null
                                    };
                                    if (n && Q.Promise && (k.promise = new Q.Promise(function(e, t) {
                                            k.resolver = e, k.rejecter = t
                                        })), V = o ? (A = arguments[0].properties || arguments[0].p, arguments[0].options || arguments[0].o) : (A = arguments[r], arguments[r + 1]), E = y(E)) {
                                        var B, F = E.length,
                                            L = 0;
                                        if (!/^(stop|finish|finishAll|pause|resume)$/i.test(A) && !U.isPlainObject(V))
                                            for (var V = {}, s = r + 1; s < arguments.length; s++) $.isArray(arguments[s]) || !/^(fast|normal|slow)$/i.test(arguments[s]) && !/^\d/.test(arguments[s]) ? $.isString(arguments[s]) || $.isArray(arguments[s]) ? V.easing = arguments[s] : $.isFunction(arguments[s]) && (V.complete = arguments[s]) : V.duration = arguments[s];
                                        switch (A) {
                                            case "scroll":
                                                B = "scroll";
                                                break;
                                            case "reverse":
                                                B = "reverse";
                                                break;
                                            case "pause":
                                                var a = (new Date).getTime();
                                                return U.each(E, function(e, t) {
                                                    v(t, a)
                                                }), U.each(Q.State.calls, function(e, i) {
                                                    var r = !1;
                                                    i && U.each(i[1], function(e, n) {
                                                        var t = V === q ? "" : V;
                                                        return !0 !== t && i[2].queue !== t && (V !== q || !1 !== i[2].queue) || (U.each(E, function(e, t) {
                                                            if (t === n) return i[5] = {
                                                                resume: !1
                                                            }, !(r = !0)
                                                        }), !r && void 0)
                                                    })
                                                }), t();
                                            case "resume":
                                                return U.each(E, function(e, t) {
                                                    b(t)
                                                }), U.each(Q.State.calls, function(e, i) {
                                                    var r = !1;
                                                    i && U.each(i[1], function(e, n) {
                                                        var t = V === q ? "" : V;
                                                        return !0 !== t && i[2].queue !== t && (V !== q || !1 !== i[2].queue) || (!i[5] || (U.each(E, function(e, t) {
                                                            if (t === n) return i[5].resume = !0, !(r = !0)
                                                        }), !r && void 0))
                                                    })
                                                }), t();
                                            case "finish":
                                            case "finishAll":
                                            case "stop":
                                                U.each(E, function(e, t) {
                                                    K(t) && K(t).delayTimer && (clearTimeout(K(t).delayTimer.setTimeout), K(t).delayTimer.next && K(t).delayTimer.next(), delete K(t).delayTimer), "finishAll" !== A || !0 !== V && !$.isString(V) || (U.each(U.queue(t, $.isString(V) ? V : ""), function(e, t) {
                                                        $.isFunction(t) && t()
                                                    }), U.queue(t, $.isString(V) ? V : "", []))
                                                });
                                                var l = [];
                                                return U.each(Q.State.calls, function(r, o) {
                                                    o && U.each(o[1], function(e, n) {
                                                        var i = V === q ? "" : V;
                                                        if (!0 !== i && o[2].queue !== i && (V !== q || !1 !== o[2].queue)) return !0;
                                                        U.each(E, function(e, t) {
                                                            t === n && (!0 !== V && !$.isString(V) || (U.each(U.queue(t, $.isString(V) ? V : ""), function(e, t) {
                                                                $.isFunction(t) && t(null, !0)
                                                            }), U.queue(t, $.isString(V) ? V : "", [])), "stop" === A ? ((t = K(t)) && t.tweensContainer && !1 !== i && U.each(t.tweensContainer, function(e, t) {
                                                                t.endValue = t.currentValue
                                                            }), l.push(r)) : "finish" !== A && "finishAll" !== A || (o[2].duration = 1))
                                                        })
                                                    })
                                                }), "stop" === A && (U.each(l, function(e, t) {
                                                    O(t, !0)
                                                }), k.promise && k.resolver(E)), t();
                                            default:
                                                if (!U.isPlainObject(A) || $.isEmptyObject(A)) {
                                                    if ($.isString(A) && Q.Redirects[A]) {
                                                        var c, u = (c = U.extend({}, V)).duration,
                                                            f = c.delay || 0;
                                                        return !0 === c.backwards && (E = U.extend(!0, [], E).reverse()), U.each(E, function(e, t) {
                                                            parseFloat(c.stagger) ? c.delay = f + parseFloat(c.stagger) * e : $.isFunction(c.stagger) && (c.delay = f + c.stagger.call(t, e, F)), c.drag && (c.duration = parseFloat(u) || (/^(callout|transition)/.test(A) ? 1e3 : 400), c.duration = Math.max(c.duration * (c.backwards ? 1 - e / F : (e + 1) / F), .75 * c.duration, 200)), Q.Redirects[A].call(t, t, c || {}, e, F, E, k.promise ? k : q)
                                                        }), t()
                                                    }
                                                    var d = "Velocity: First argument (" + A + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                                    return k.promise ? k.rejecter(new Error(d)) : H.console, t()
                                                }
                                                B = "start"
                                        }
                                        var M = {
                                                lastParent: null,
                                                lastPosition: null,
                                                lastFontSize: null,
                                                lastPercentToPxWidth: null,
                                                lastPercentToPxHeight: null,
                                                lastEmToPx: null,
                                                remToPx: null,
                                                vwToPx: null,
                                                vhToPx: null
                                            },
                                            W = [];
                                        U.each(E, function(e, t) {
                                            $.isNode(t) && g(t, e)
                                        }), (c = U.extend({}, Q.defaults, V)).loop = parseInt(c.loop, 10);
                                        var p = 2 * c.loop - 1;
                                        if (c.loop)
                                            for (var h = 0; h < p; h++) {
                                                var m = {
                                                    delay: c.delay,
                                                    progress: c.progress
                                                };
                                                h === p - 1 && (m.display = c.display, m.visibility = c.visibility, m.complete = c.complete), e(E, "reverse", m)
                                            }
                                        return t()
                                    }

                                    function g(P, C) {
                                        var D, e, t, N = U.extend({}, Q.defaults, V),
                                            j = {};
                                        switch (K(P) === q && Q.init(P), parseFloat(N.delay) && !1 !== N.queue && U.queue(P, N.queue, function(e) {
                                                Q.velocityQueueEntryFlag = !0;
                                                var t = Q.State.delayedElements.count++;
                                                Q.State.delayedElements[t] = P;
                                                var n, t = (n = t, function() {
                                                    Q.State.delayedElements[n] = !1, e()
                                                });
                                                K(P).delayBegin = (new Date).getTime(), K(P).delay = parseFloat(N.delay), K(P).delayTimer = {
                                                    setTimeout: setTimeout(e, parseFloat(N.delay)),
                                                    next: t
                                                }
                                            }), N.duration.toString().toLowerCase()) {
                                            case "fast":
                                                N.duration = 200;
                                                break;
                                            case "normal":
                                                N.duration = 400;
                                                break;
                                            case "slow":
                                                N.duration = 600;
                                                break;
                                            default:
                                                N.duration = parseFloat(N.duration) || 1
                                        }

                                        function n(e) {
                                            var O, I, t, n, i, r, o, s;
                                            if (N.begin && 0 === L) try {
                                                N.begin.call(E, E)
                                            } catch (e) {
                                                setTimeout(function() {
                                                    throw e
                                                }, 1)
                                            }
                                            if ("scroll" === B) {
                                                var a, l, c, u = /^x$/i.test(N.axis) ? "Left" : "Top",
                                                    f = parseFloat(N.offset) || 0;
                                                N.container ? $.isWrapped(N.container) || $.isNode(N.container) ? (N.container = N.container[0] || N.container, c = (a = N.container["scroll" + u]) + U(P).position()[u.toLowerCase()] + f) : N.container = null : (a = Q.State.scrollAnchor[Q.State["scrollProperty" + u]], l = Q.State.scrollAnchor[Q.State["scrollProperty" + ("Left" === u ? "Top" : "Left")]], c = U(P).offset()[u.toLowerCase()] + f), j = {
                                                    scroll: {
                                                        rootPropertyValue: !1,
                                                        startValue: a,
                                                        currentValue: a,
                                                        endValue: c,
                                                        unitType: "",
                                                        easing: N.easing,
                                                        scrollData: {
                                                            container: N.container,
                                                            direction: u,
                                                            alternateValue: l
                                                        }
                                                    },
                                                    element: P
                                                }, Q.debug
                                            } else if ("reverse" === B) {
                                                if (!(O = K(P))) return;
                                                if (!O.tweensContainer) return void U.dequeue(P, N.queue);
                                                for (var d in "none" === O.opts.display && (O.opts.display = "auto"), "hidden" === O.opts.visibility && (O.opts.visibility = "visible"), O.opts.loop = !1, O.opts.begin = null, O.opts.complete = null, V.easing || delete N.easing, V.duration || delete N.duration, N = U.extend({}, O.opts, N), I = U.extend(!0, {}, O ? O.tweensContainer : null)) I.hasOwnProperty(d) && "element" !== d && (t = I[d].startValue, I[d].startValue = I[d].currentValue = I[d].endValue, I[d].endValue = t, $.isEmptyObject(V) || (I[d].easing = N.easing), Q.debug);
                                                j = I
                                            } else if ("start" === B) {
                                                (O = K(P)) && O.tweensContainer && !0 === O.isAnimating && (I = O.tweensContainer);
                                                var p, h = function(e, t) {
                                                    var n = Y.Hooks.getRoot(e),
                                                        i = !1,
                                                        r = t[0],
                                                        o = t[1],
                                                        s = t[2];
                                                    if (O && O.isSVG || "tween" === n || !1 !== Y.Names.prefixCheck(n)[1] || Y.Normalizations.registered[n] !== q) {
                                                        (N.display !== q && null !== N.display && "none" !== N.display || N.visibility !== q && "hidden" !== N.visibility) && /opacity|filter/.test(e) && !s && 0 !== r && (s = 0), N._cacheValues && I && I[e] ? (s === q && (s = I[e].endValue + I[e].unitType), i = O.rootPropertyValueCache[n]) : Y.Hooks.registered[e] ? s === q ? (i = Y.getPropertyValue(P, n), s = Y.getPropertyValue(P, e, i)) : i = Y.Hooks.templates[n][1] : s === q && (s = Y.getPropertyValue(P, e));
                                                        var a, l, c = !1,
                                                            t = function(e, t) {
                                                                var t = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                                                                        return n = e, ""
                                                                    }),
                                                                    n = n || Y.Values.getUnitType(e);
                                                                return [t, n]
                                                            };
                                                        if (s !== r && $.isString(s) && $.isString(r)) {
                                                            for (var u = "", f = 0, d = 0, p = [], h = [], m = 0, g = 0, y = 0, s = Y.Hooks.fixColors(s), r = Y.Hooks.fixColors(r); f < s.length && d < r.length;) {
                                                                var v = s[f],
                                                                    b = r[d];
                                                                if (/[\d\.-]/.test(v) && /[\d\.-]/.test(b)) {
                                                                    for (var w = v, S = b, x = ".", _ = "."; ++f < s.length;) {
                                                                        if ((v = s[f]) === x) x = "..";
                                                                        else if (!/\d/.test(v)) break;
                                                                        w += v
                                                                    }
                                                                    for (; ++d < r.length;) {
                                                                        if ((b = r[d]) === _) _ = "..";
                                                                        else if (!/\d/.test(b)) break;
                                                                        S += b
                                                                    }
                                                                    var T, C, E = Y.Hooks.getUnit(s, f),
                                                                        A = Y.Hooks.getUnit(r, d);
                                                                    f += E.length, d += A.length, E === A ? w === S ? u += w + E : (u += "{" + p.length + (g ? "!" : "") + "}" + E, p.push(parseFloat(w)), h.push(parseFloat(S))) : (T = parseFloat(w), C = parseFloat(S), u += (m < 5 ? "calc" : "") + "(" + (T ? "{" + p.length + (g ? "!" : "") + "}" : "0") + E + " + " + (C ? "{" + (p.length + (T ? 1 : 0)) + (g ? "!" : "") + "}" : "0") + A + ")", T && (p.push(T), h.push(0)), C && (p.push(0), h.push(C)))
                                                                } else {
                                                                    if (v !== b) {
                                                                        m = 0;
                                                                        break
                                                                    }
                                                                    u += v, f++, d++, 0 === m && "c" === v || 1 === m && "a" === v || 2 === m && "l" === v || 3 === m && "c" === v || 4 <= m && "(" === v ? m++ : (m && m < 5 || 4 <= m && ")" === v && --m < 5) && (m = 0), 0 === g && "r" === v || 1 === g && "g" === v || 2 === g && "b" === v || 3 === g && "a" === v || 3 <= g && "(" === v ? (3 === g && "a" === v && (y = 1), g++) : y && "," === v ? 3 < ++y && (g = y = 0) : (y && g < (y ? 5 : 4) || (y ? 4 : 3) <= g && ")" === v && --g < (y ? 5 : 4)) && (g = y = 0)
                                                                }
                                                            }
                                                            f === s.length && d === r.length || (Q.debug, u = q), u && (p.length ? (Q.debug, s = p, r = h, a = l = "") : u = q)
                                                        }
                                                        u || (s = (n = t(e, s))[0], l = n[1], r = (n = t(e, r))[0].replace(/^([+-\/*])=/, function(e, t) {
                                                            return c = t, ""
                                                        }), a = n[1], s = parseFloat(s) || 0, r = parseFloat(r) || 0, "%" === a && (/^(fontSize|lineHeight)$/.test(e) ? (r /= 100, a = "em") : /^scale/.test(e) ? (r /= 100, a = "") : /(Red|Green|Blue)$/i.test(e) && (r = r / 100 * 255, a = "")));
                                                        if (/[\/*]/.test(c)) a = l;
                                                        else if (l !== a && 0 !== s)
                                                            if (0 === r) a = l;
                                                            else {
                                                                D = D || function() {
                                                                    var e = {
                                                                            myParent: P.parentNode || R.body,
                                                                            position: Y.getPropertyValue(P, "position"),
                                                                            fontSize: Y.getPropertyValue(P, "fontSize")
                                                                        },
                                                                        t = e.position === M.lastPosition && e.myParent === M.lastParent,
                                                                        n = e.fontSize === M.lastFontSize;
                                                                    M.lastParent = e.myParent, M.lastPosition = e.position, M.lastFontSize = e.fontSize;
                                                                    var i, r = {};
                                                                    return n && t ? (r.emToPx = M.lastEmToPx, r.percentToPxWidth = M.lastPercentToPxWidth, r.percentToPxHeight = M.lastPercentToPxHeight) : (i = O && O.isSVG ? R.createElementNS("http://www.w3.org/2000/svg", "rect") : R.createElement("div"), Q.init(i), e.myParent.appendChild(i), U.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                                                        Q.CSS.setPropertyValue(i, t, "hidden")
                                                                    }), Q.CSS.setPropertyValue(i, "position", e.position), Q.CSS.setPropertyValue(i, "fontSize", e.fontSize), Q.CSS.setPropertyValue(i, "boxSizing", "content-box"), U.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                                                        Q.CSS.setPropertyValue(i, t, "100%")
                                                                    }), Q.CSS.setPropertyValue(i, "paddingLeft", "100em"), r.percentToPxWidth = M.lastPercentToPxWidth = (parseFloat(Y.getPropertyValue(i, "width", null, !0)) || 1) / 100, r.percentToPxHeight = M.lastPercentToPxHeight = (parseFloat(Y.getPropertyValue(i, "height", null, !0)) || 1) / 100, r.emToPx = M.lastEmToPx = (parseFloat(Y.getPropertyValue(i, "paddingLeft")) || 1) / 100, e.myParent.removeChild(i)), null === M.remToPx && (M.remToPx = parseFloat(Y.getPropertyValue(R.body, "fontSize")) || 16), null === M.vwToPx && (M.vwToPx = parseFloat(H.innerWidth) / 100, M.vhToPx = parseFloat(H.innerHeight) / 100), r.remToPx = M.remToPx, r.vwToPx = M.vwToPx, r.vhToPx = M.vhToPx, Q.debug, r
                                                                }();
                                                                var k = /margin|padding|left|right|width|text|word|letter/i.test(e) || /X$/.test(e) || "x" === e ? "x" : "y";
                                                                switch (l) {
                                                                    case "%":
                                                                        s *= "x" == k ? D.percentToPxWidth : D.percentToPxHeight;
                                                                        break;
                                                                    case "px":
                                                                        break;
                                                                    default:
                                                                        s *= D[l + "ToPx"]
                                                                }
                                                                switch (a) {
                                                                    case "%":
                                                                        s *= 1 / ("x" == k ? D.percentToPxWidth : D.percentToPxHeight);
                                                                        break;
                                                                    case "px":
                                                                        break;
                                                                    default:
                                                                        s *= 1 / D[a + "ToPx"]
                                                                }
                                                            } switch (c) {
                                                            case "+":
                                                                r = s + r;
                                                                break;
                                                            case "-":
                                                                r = s - r;
                                                                break;
                                                            case "*":
                                                                r *= s;
                                                                break;
                                                            case "/":
                                                                r = s / r
                                                        }
                                                        j[e] = {
                                                            rootPropertyValue: i,
                                                            startValue: s,
                                                            currentValue: s,
                                                            endValue: r,
                                                            unitType: a,
                                                            easing: o
                                                        }, u && (j[e].pattern = u), Q.debug
                                                    } else Q.debug
                                                };
                                                for (p in A)
                                                    if (A.hasOwnProperty(p)) {
                                                        var m = Y.Names.camelCase(p),
                                                            g = (n = A[p], s = o = r = i = void 0, $.isFunction(n) && (n = n.call(P, C, F)), $.isArray(n) ? (r = n[0], s = !$.isArray(n[1]) && /^[\d-]/.test(n[1]) || $.isFunction(n[1]) || Y.RegEx.isHex.test(n[1]) ? n[1] : $.isString(n[1]) && !Y.RegEx.isHex.test(n[1]) && Q.Easings[n[1]] || $.isArray(n[1]) ? (o = i ? n[1] : X(n[1], N.duration), n[2]) : n[1] || n[2]) : r = n, i || (o = o || N.easing), [(r = $.isFunction(r) ? r.call(P, C, F) : r) || 0, o, s = $.isFunction(s) ? s.call(P, C, F) : s]);
                                                        if (z(Y.Lists.colors)) {
                                                            var y = g[0],
                                                                v = g[1],
                                                                b = g[2];
                                                            if (Y.RegEx.isHex.test(y)) {
                                                                for (var w = ["Red", "Green", "Blue"], S = Y.Values.hexToRgb(y), x = b ? Y.Values.hexToRgb(b) : q, _ = 0; _ < w.length; _++) {
                                                                    var T = [S[_]];
                                                                    v && T.push(v), x !== q && T.push(x[_]), h(m + w[_], T)
                                                                }
                                                                continue
                                                            }
                                                        }
                                                        h(m, g)
                                                    } j.element = P
                                            }
                                            j.element && (Y.Values.addClass(P, "velocity-animating"), W.push(j), (O = K(P)) && ("" === N.queue && (O.tweensContainer = j, O.opts = N), O.isAnimating = !0), L === F - 1 ? (Q.State.calls.push([W, E, N, null, k.resolver, null, 0]), !1 === Q.State.isTicking && (Q.State.isTicking = !0, G())) : L++)
                                        }!1 !== Q.mock && (!0 === Q.mock ? N.duration = N.delay = 1 : (N.duration *= parseFloat(Q.mock) || 1, N.delay *= parseFloat(Q.mock) || 1)), N.easing = X(N.easing, N.duration), N.begin && !$.isFunction(N.begin) && (N.begin = null), N.progress && !$.isFunction(N.progress) && (N.progress = null), N.complete && !$.isFunction(N.complete) && (N.complete = null), N.display !== q && null !== N.display && (N.display = N.display.toString().toLowerCase(), "auto" === N.display && (N.display = Q.CSS.Values.getDisplayType(P))), N.visibility !== q && null !== N.visibility && (N.visibility = N.visibility.toString().toLowerCase()), N.mobileHA = N.mobileHA && Q.State.isMobile && !Q.State.isGingerbread, !1 === N.queue ? N.delay ? (e = Q.State.delayedElements.count++, Q.State.delayedElements[e] = P, t = e, e = function() {
                                            Q.State.delayedElements[t] = !1, n()
                                        }, K(P).delayBegin = (new Date).getTime(), K(P).delay = parseFloat(N.delay), K(P).delayTimer = {
                                            setTimeout: setTimeout(n, parseFloat(N.delay)),
                                            next: e
                                        }) : n() : U.queue(P, N.queue, function(e, t) {
                                            return !0 === t ? (k.promise && k.resolver(E), !0) : (Q.velocityQueueEntryFlag = !0, void n())
                                        }), "" !== N.queue && "fx" !== N.queue || "inprogress" === U.queue(P)[0] || U.dequeue(P)
                                    }
                                    k.promise && (A && V && !1 === V.promiseRejectEmpty ? k.resolver() : k.rejecter())
                                };
                                (Q = U.extend(l, Q)).animate = l;
                                var E = H.requestAnimationFrame || n;
                                return Q.State.isMobile || R.hidden === q || ((o = function() {
                                    R.hidden ? (E = function(e) {
                                        return setTimeout(function() {
                                            e(!0)
                                        }, 16)
                                    }, G()) : E = H.requestAnimationFrame || n
                                })(), R.addEventListener("visibilitychange", o)), e.Velocity = Q, e !== H && (e.fn.velocity = l, e.fn.velocity.defaults = Q.defaults), U.each(["Down", "Up"], function(e, u) {
                                    Q.Redirects["slide" + u] = function(n, e, i, t, r, o) {
                                        var e = U.extend({}, e),
                                            s = e.begin,
                                            a = e.complete,
                                            l = {},
                                            c = {
                                                height: "",
                                                marginTop: "",
                                                marginBottom: "",
                                                paddingTop: "",
                                                paddingBottom: ""
                                            };
                                        e.display === q && (e.display = "Down" === u ? "inline" === Q.CSS.Values.getDisplayType(n) ? "inline-block" : "block" : "none"), e.begin = function() {
                                            for (var e in 0 === i && s && s.call(r, r), c) {
                                                var t;
                                                c.hasOwnProperty(e) && (l[e] = n.style[e], t = Y.getPropertyValue(n, e), c[e] = "Down" === u ? [t, 0] : [0, t])
                                            }
                                            l.overflow = n.style.overflow, n.style.overflow = "hidden"
                                        }, e.complete = function() {
                                            for (var e in l) l.hasOwnProperty(e) && (n.style[e] = l[e]);
                                            i === t - 1 && (a && a.call(r, r), o && o.resolver(r))
                                        }, Q(n, c, e)
                                    }
                                }), U.each(["In", "Out"], function(e, l) {
                                    Q.Redirects["fade" + l] = function(e, t, n, i, r, o) {
                                        var s = U.extend({}, t),
                                            a = s.complete,
                                            t = {
                                                opacity: "In" === l ? 1 : 0
                                            };
                                        0 !== n && (s.begin = null), s.complete = n !== i - 1 ? null : function() {
                                            a && a.call(r, r), o && o.resolver(r)
                                        }, s.display === q && (s.display = "In" === l ? "auto" : "none"), Q(this, t, s)
                                    }
                                }), Q
                            }

                            function K(e) {
                                e = U.data(e, "velocity");
                                return null === e ? q : e
                            }

                            function v(e, t) {
                                e = K(e);
                                e && e.delayTimer && !e.delayPaused && (e.delayRemaining = e.delay - t + e.delayBegin, e.delayPaused = !0, clearTimeout(e.delayTimer.setTimeout))
                            }

                            function b(e) {
                                e = K(e);
                                e && e.delayTimer && e.delayPaused && (e.delayPaused = !1, e.delayTimer.setTimeout = setTimeout(e.delayTimer.next, e.delayRemaining))
                            }

                            function c(s, t, a, n) {
                                var l = 4,
                                    c = 1e-7,
                                    u = 10,
                                    f = 11,
                                    d = 1 / (f - 1),
                                    e = "Float32Array" in H;
                                if (4 !== arguments.length) return !1;
                                for (var i = 0; i < 4; ++i)
                                    if ("number" != typeof arguments[i] || isNaN(arguments[i]) || !isFinite(arguments[i])) return !1;
                                s = Math.min(s, 1), a = Math.min(a, 1), s = Math.max(s, 0), a = Math.max(a, 0);
                                var p = new(e ? Float32Array : Array)(f);

                                function r(e, t) {
                                    return 1 - 3 * t + 3 * e
                                }

                                function h(e, t, n) {
                                    return ((r(t, n) * e + (3 * n - 6 * t)) * e + 3 * t) * e
                                }

                                function m(e, t, n) {
                                    return 3 * r(t, n) * e * e + 2 * (3 * n - 6 * t) * e + 3 * t
                                }

                                function o(e) {
                                    for (var t = 0, n = 1, i = f - 1; n !== i && p[n] <= e; ++n) t += d;
                                    var r = t + (e - p[--n]) / (p[n + 1] - p[n]) * d,
                                        o = m(r, s, a);
                                    return .001 <= o ? function(e, t) {
                                        for (var n = 0; n < l; ++n) {
                                            var i = m(t, s, a);
                                            if (0 === i) return t;
                                            t -= (h(t, s, a) - e) / i
                                        }
                                        return t
                                    }(e, r) : 0 === o ? r : function(e, t, n) {
                                        for (var i, r, o = 0; 0 < (i = h(r = t + (n - t) / 2, s, a) - e) ? n = r : t = r, Math.abs(i) > c && ++o < u;);
                                        return r
                                    }(e, t, t + d)
                                }
                                var g = !1;

                                function y() {
                                    g = !0, s === t && a === n || function() {
                                        for (var e = 0; e < f; ++e) p[e] = h(e * d, s, a)
                                    }()
                                }
                                e = function(e) {
                                    return g || y(), s === t && a === n ? e : 0 === e ? 0 : 1 === e ? 1 : h(o(e), t, n)
                                };
                                e.getControlPoints = function() {
                                    return [{
                                        x: s,
                                        y: t
                                    }, {
                                        x: a,
                                        y: n
                                    }]
                                };
                                var v = "generateBezier(" + [s, t, a, n] + ")";
                                return e.toString = function() {
                                    return v
                                }, e
                            }

                            function w(e) {
                                return -e.tension * e.x - e.friction * e.v
                            }

                            function S(e, t, n) {
                                e = {
                                    x: e.x + n.dx * t,
                                    v: e.v + n.dv * t,
                                    tension: e.tension,
                                    friction: e.friction
                                };
                                return {
                                    dx: e.v,
                                    dv: w(e)
                                }
                            }

                            function X(e, t) {
                                var n = e;
                                return $.isString(e) ? Q.Easings[e] || (n = !1) : n = $.isArray(e) && 1 === e.length ? function(t) {
                                    return function(e) {
                                        return Math.round(e * t) * (1 / t)
                                    }
                                }.apply(null, e) : $.isArray(e) && 2 === e.length ? a.apply(null, e.concat([t])) : !(!$.isArray(e) || 4 !== e.length) && c.apply(null, e), n = !1 === n ? Q.Easings[Q.defaults.easing] ? Q.defaults.easing : s : n
                            }

                            function G(e) {
                                if (e) {
                                    var t = Q.timestamp && !0 !== e ? e : C.now(),
                                        n = Q.State.calls.length;
                                    1e4 < n && (Q.State.calls = function(e) {
                                        for (var t = -1, n = e ? e.length : 0, i = []; ++t < n;) {
                                            var r = e[t];
                                            r && i.push(r)
                                        }
                                        return i
                                    }(Q.State.calls), n = Q.State.calls.length);
                                    for (var i = 0; i < n; i++)
                                        if (Q.State.calls[i]) {
                                            var r = Q.State.calls[i],
                                                o = r[0],
                                                s = r[2],
                                                a = !!(f = r[3]),
                                                l = null,
                                                c = r[5],
                                                u = r[6],
                                                f = f || (Q.State.calls[i][3] = t - 16);
                                            if (c) {
                                                if (!0 !== c.resume) continue;
                                                f = r[3] = Math.round(t - u - 16), r[5] = null
                                            }
                                            for (var u = r[6] = t - f, d = Math.min(u / s.duration, 1), p = 0, h = o.length; p < h; p++) {
                                                var m = o[p],
                                                    g = m.element;
                                                if (K(g)) {
                                                    var y, v, b, w, S, x, _ = !1;
                                                    for (y in s.display !== q && null !== s.display && "none" !== s.display && ("flex" === s.display && U.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], function(e, t) {
                                                            Y.setPropertyValue(g, "display", t)
                                                        }), Y.setPropertyValue(g, "display", s.display)), s.visibility !== q && "hidden" !== s.visibility && Y.setPropertyValue(g, "visibility", s.visibility), m) m.hasOwnProperty(y) && "element" !== y && (v = m[y], b = $.isString(v.easing) ? Q.Easings[v.easing] : v.easing, x = $.isString(v.pattern) ? v.pattern.replace(/{(\d+)(!)?}/g, 1 === d ? function(e, t, n) {
                                                        t = v.endValue[t];
                                                        return n ? Math.round(t) : t
                                                    } : function(e, t, n) {
                                                        var i = v.startValue[t],
                                                            t = v.endValue[t] - i,
                                                            t = i + t * b(d, s, t);
                                                        return n ? Math.round(t) : t
                                                    }) : 1 === d ? v.endValue : (S = v.endValue - v.startValue, v.startValue + S * b(d, s, S)), !a && x === v.currentValue || (v.currentValue = x, "tween" === y ? l = x : (Y.Hooks.registered[y] && (w = Y.Hooks.getRoot(y), (S = K(g).rootPropertyValueCache[w]) && (v.rootPropertyValue = S)), x = Y.setPropertyValue(g, y, v.currentValue + (T < 9 && 0 === parseFloat(x) ? "" : v.unitType), v.rootPropertyValue, v.scrollData), Y.Hooks.registered[y] && (Y.Normalizations.registered[w] ? K(g).rootPropertyValueCache[w] = Y.Normalizations.registered[w]("extract", null, x[1]) : K(g).rootPropertyValueCache[w] = x[1]), "transform" === x[0] && (_ = !0))));
                                                    s.mobileHA && K(g).transformCache.translate3d === q && (K(g).transformCache.translate3d = "(0px, 0px, 0px)", _ = !0), _ && Y.flushTransformCache(g)
                                                }
                                            }
                                            s.display !== q && "none" !== s.display && (Q.State.calls[i][2].display = !1), s.visibility !== q && "hidden" !== s.visibility && (Q.State.calls[i][2].visibility = !1), s.progress && s.progress.call(r[1], r[1], d, Math.max(0, f + s.duration - t), f, l), 1 === d && O(i)
                                        }
                                }
                                Q.State.isTicking && E(G)
                            }

                            function O(e, t) {
                                if (Q.State.calls[e]) {
                                    for (var n = Q.State.calls[e][0], i = Q.State.calls[e][1], r = Q.State.calls[e][2], o = Q.State.calls[e][4], s = !1, a = 0, l = n.length; a < l; a++) {
                                        var c = n[a].element;
                                        t || r.loop || ("none" === r.display && Y.setPropertyValue(c, "display", r.display), "hidden" === r.visibility && Y.setPropertyValue(c, "visibility", r.visibility));
                                        var u, f = K(c);
                                        if (!0 === r.loop || U.queue(c)[1] !== q && /\.velocityQueueEntryFlag/i.test(U.queue(c)[1]) || f && (f.isAnimating = !1, u = !(f.rootPropertyValueCache = {}), U.each(Y.Lists.transforms3D, function(e, t) {
                                                var n = /^scale/.test(t) ? 1 : 0,
                                                    i = f.transformCache[t];
                                                f.transformCache[t] !== q && new RegExp("^\\(" + n + "[^.]").test(i) && (u = !0, delete f.transformCache[t])
                                            }), r.mobileHA && (u = !0, delete f.transformCache.translate3d), u && Y.flushTransformCache(c), Y.Values.removeClass(c, "velocity-animating")), !t && r.complete && !r.loop && a === l - 1) try {
                                            r.complete.call(i, i)
                                        } catch (e) {
                                            setTimeout(function() {
                                                throw e
                                            }, 1)
                                        }
                                        o && !0 !== r.loop && o(i), f && !0 === r.loop && !t && (U.each(f.tweensContainer, function(e, t) {
                                            var n;
                                            /^rotate/.test(e) && (parseFloat(t.startValue) - parseFloat(t.endValue)) % 360 == 0 && (n = t.startValue, t.startValue = t.endValue, t.endValue = n), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                                        }), Q(c, "reverse", {
                                            loop: !0,
                                            delay: r.delay
                                        })), !1 !== r.queue && U.dequeue(c, r.queue)
                                    }
                                    Q.State.calls[e] = !1;
                                    for (var d = 0, p = Q.State.calls.length; d < p; d++)
                                        if (!1 !== Q.State.calls[d]) {
                                            s = !0;
                                            break
                                        }! 1 === s && (Q.State.isTicking = !1, delete Q.State.calls, Q.State.calls = [])
                                }
                            }
                            jQuery.fn.velocity = jQuery.fn.animate
                        }(window.jQuery || window.Zepto || window, window, window ? window.document : void 0)
                    })
            },
            226: function(e, t, n) {
                e.exports = n.g.Tether = n(158)
            },
            609: function(e) {
                "use strict";
                e.exports = jQuery
            }
        },
        i = {};

    function k(e) {
        var t = i[e];
        if (void 0 !== t) return t.exports;
        t = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, k), t.loaded = !0, t.exports
    }
    k.amdO = {}, k.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return k.d(t, {
            a: t
        }), t
    }, k.d = function(e, t) {
        for (var n in t) k.o(t, n) && !k.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, k.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), k.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, k.nmd = function(e) {
        return e.paths = [], e.children || (e.children = []), e
    };
    ! function() {
        "use strict";
        k(226), k(249), k(144), k(650), k(653);
        var e = prestashop,
            a = k.n(e),
            e = k(609),
            l = k.n(e);

        function i(e, t) {
            var n = t.children().detach();
            t.empty().append(e.children().detach()), e.append(n)
        }

        function r() {
            a().responsive.mobile ? l()("*[id^='_desktop_']").each(function(e, t) {
                var n = l()("#".concat(t.id.replace("_desktop_", "_mobile_")));
                n.length && i(l()(t), n)
            }) : l()("*[id^='_mobile_']").each(function(e, t) {
                var n = l()("#".concat(t.id.replace("_mobile_", "_desktop_")));
                n.length && i(l()(t), n)
            }), a().emit("responsive update", {
                mobile: a().responsive.mobile
            })
        }
        a().themeSelectors = {
            product: {
                tabs: ".tabs .nav-link",
                activeNavClass: "js-product-nav-active",
                activeTabClass: "js-product-tab-active",
                activeTabs: ".tabs .nav-link.active, .js-product-nav-active",
                imagesModal: ".js-product-images-modal",
                thumb: ".js-thumb",
                thumbContainer: ".thumb-container, .js-thumb-container",
                arrows: ".js-arrows",
                selected: ".selected, .js-thumb-selected",
                modalProductCover: ".js-modal-product-cover",
                cover: ".js-qv-product-cover"
            },
            listing: {
                searchFilterToggler: "#search_filter_toggler, .js-search-toggler",
                searchFiltersWrapper: "#search_filters_wrapper",
                searchFilterControls: "#search_filter_controls",
                searchFilters: "#search_filters",
                activeSearchFilters: "#js-active-search-filters",
                listTop: "#js-product-list-top",
                product: ".js-product",
                list: "#js-product-list",
                listBottom: "#js-product-list-bottom",
                listHeader: "#js-product-list-header",
                searchFiltersClearAll: ".js-search-filters-clear-all",
                searchLink: ".js-search-link"
            },
            order: {
                returnForm: "#order-return-form, .js-order-return-form"
            },
            arrowDown: ".arrow-down, .js-arrow-down",
            arrowUp: ".arrow-up, .js-arrow-up",
            clear: ".clear",
            fileInput: ".js-file-input",
            contentWrapper: "#content-wrapper, .js-content-wrapper",
            footer: "#footer, .js-footer",
            modalContent: ".js-modal-content",
            modal: "#modal, .js-checkout-modal",
            touchspin: ".js-touchspin",
            checkout: {
                termsLink: ".js-terms a",
                giftCheckbox: ".js-gift-checkbox",
                imagesLink: ".card-block .cart-summary-products p a, .js-show-details",
                carrierExtraContent: ".carrier-extra-content, .js-carrier-extra-content"
            }
        }, l()(document).ready(function() {
            a().emit("themeSelectorsInit")
        }), a().responsive = a().responsive || {}, a().responsive.current_width = window.innerWidth, a().responsive.min_width = 992, a().responsive.mobile = a().responsive.current_width < a().responsive.min_width, l()(window).on("resize", function() {
            var e = a().responsive.current_width,
                t = a().responsive.min_width,
                n = window.innerWidth,
                t = t <= e && n < t || e < t && t <= n;
            a().responsive.current_width = n, a().responsive.mobile = a().responsive.current_width < a().responsive.min_width, t && r()
        }), l()(document).ready(function() {
            a().responsive.mobile && r()
        }), l()(document).ready(function() {
            1 === l()("body#checkout").length && (l()(a().themeSelectors.checkout.termsLink).on("click", function(e) {
                e.preventDefault();
                e = l()(e.target).attr("href");
                e && (e += "?content_only=1", l().get(e, function(e) {
                    l()(a().themeSelectors.modal).find(a().themeSelectors.modalContent).html(l()(e).find(".page-cms").contents())
                }).fail(function(e) {
                    a().emit("handleError", {
                        eventType: "clickTerms",
                        resp: e
                    })
                })), l()(a().themeSelectors.modal).modal("show")
            }), l()(a().themeSelectors.checkout.giftCheckbox).on("click", function() {
                l()("#gift").collapse("toggle")
            }), l()(a().themeSelectors.checkout.imagesLink).on("click", function() {
                var e = l()(this).find("i.material-icons");
                "expand_more" === e.text() ? e.text("expand_less") : e.text("expand_more")
            })), a().on("updatedDeliveryForm", function(e) {
                void 0 !== e.deliveryOption && 0 !== e.deliveryOption.length && (l()(a().themeSelectors.checkout.carrierExtraContent).hide(), e.deliveryOption.next(a().themeSelectors.checkout.carrierExtraContent).slideDown())
            })
        }), l()(document).ready(function() {
            l()("body#order-detail") && l()("".concat(a().themeSelectors.order.returnForm, " table thead input[type=checkbox]")).on("click", function() {
                var n = l()(this).prop("checked");
                l()("".concat(a().themeSelectors.order.returnForm, " table tbody input[type=checkbox]")).each(function(e, t) {
                    l()(t).prop("checked", n)
                })
            })
        });
        k(225);

        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var s = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, n, i;
            return t = e, (n = [{
                key: "init",
                value: function() {
                    l()(".js-product-miniature").each(function(e, t) {
                        var n;
                        5 < l()(t).find(".color").length && (n = 0, l()(t).find(".color").each(function(e, t) {
                            4 < e && (l()(t).hide(), n += 1)
                        }), l()(t).find(".js-count").append("+".concat(n)))
                    })
                }
            }]) && o(t.prototype, n), i && o(t, i), Object.defineProperty(t, "prototype", {
                writable: !1
            }), e
        }();

        function c(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        l()(document).ready(function() {
				$('.quick-view').click(function() {
                  $(this).addClass('quick-loading loading')
                });
            var t = window.location.href;
            a().on("clickQuickView", function(e) {
                e = {
                    action: "quickview",
                    id_product: e.dataset.idProduct,
                    id_product_attribute: e.dataset.idProductAttribute
                };
                l().post(a().urls.pages.product, e, null, "json").then(function(e) {
                    l()("body").append(e.quickview_html);
                    var t = l()("#quickview-modal-".concat(e.product.id, "-").concat(e.product.id_product_attribute));
                    t.modal("show"), n(t), t.on("hidden.bs.modal", function() {
							l()('.quick-view').removeClass('quick-loading loading');
                        t.remove()
                    })
                }).fail(function(e) {
                    a().emit("handleError", {
                        eventType: "clickQuickView",
                        resp: e
                    })
                })
            });
            var n = function (e) {
                    var t = l()(a().themeSelectors.product.arrows),
                        n = e.find(".js-qv-product-images");
                    l()(a().themeSelectors.product.thumb).on("click", function (e) {
                        l()(a().themeSelectors.product.thumb).hasClass("selected") && l()(a().themeSelectors.product.thumb).removeClass("selected"),
                            l()(e.currentTarget).addClass("selected"),
                            l()(a().themeSelectors.product.cover).attr("src", l()(e.target).data("image-large-src"));
                    }),
                        n.find("li").length <= 4
                            ? t.hide()
                            : t.on("click", function (e) {
                                  l()(e.target).hasClass("arrow-up") && l()(".js-qv-product-images").position().top < 0
                                      ? (i("up"), l()(a().themeSelectors.arrowDown).css("opacity", "1"))
                                      : l()(e.target).hasClass("arrow-down") && n.position().top + n.height() > l()(".js-qv-mask").height() && (i("down"), l()(a().themeSelectors.arrowUp).css("opacity", "1"));
                              }),
                        e
                            .find(a().selectors.quantityWanted)
                            .TouchSpin({
                                verticalbuttons: !0,
                                verticalupclass: "material-icons touchspin-up",
                                verticaldownclass: "material-icons touchspin-down",
                                buttondown_class: "btn btn-touchspin js-touchspin",
                                buttonup_class: "btn btn-touchspin js-touchspin",
                                min: 1,
                                max: 1e6,
                            }),
                        l()(a().themeSelectors.touchspin).off("touchstart.touchspin");
                },
                i = function(e) {
                    var t = l()(".js-qv-product-images"),
                        n = l()(".js-qv-product-images li img").height() + 20,
                        i = t.position().top;
                    t.velocity({
                        translateY: "up" === e ? i + n : i - n
                    }, function() {
                        0 <= t.position().top ? l()(".arrow-up").css("opacity", ".2") : t.position().top + t.height() <= l()(".js-qv-mask").height() && l()(".arrow-down").css("opacity", ".2")
                    })
                };
            l()("body").on("click", a().themeSelectors.listing.searchFilterToggler, function () {
                l()(a().themeSelectors.listing.searchFiltersWrapper).removeClass("hidden-sm-down"), l()(a().themeSelectors.contentWrapper).addClass("hidden-sm-down"), l()(a().themeSelectors.footer).addClass("hidden-sm-down");
            }),
                l()("".concat(a().themeSelectors.listing.searchFilterControls, " ").concat(a().themeSelectors.clear)).on("click", function () {
                    l()(a().themeSelectors.listing.searchFiltersWrapper).addClass("hidden-sm-down"), l()(a().themeSelectors.contentWrapper).removeClass("hidden-sm-down"), l()(a().themeSelectors.footer).removeClass("hidden-sm-down");
                }),
                l()("".concat(a().themeSelectors.listing.searchFilterControls, " .ok")).on("click", function () {
                    l()(a().themeSelectors.listing.searchFiltersWrapper).addClass("hidden-sm-down"), l()(a().themeSelectors.contentWrapper).removeClass("hidden-sm-down"), l()(a().themeSelectors.footer).removeClass("hidden-sm-down");
                });
            function r(e) {
                if (void 0 !== e.target.dataset.searchUrl) return e.target.dataset.searchUrl;
                if (void 0 === l()(e.target).parent()[0].dataset.searchUrl) throw new Error("Can not parse search URL");
                return l()(e.target).parent()[0].dataset.searchUrl;
            }
            l()("body").on("change", "".concat(a().themeSelectors.listing.searchFilters, " input[data-search-url]"), function (e) {
                a().emit("updateFacets", r(e));
            }),
                l()("body").on("click", a().themeSelectors.listing.searchFiltersClearAll, function (e) {
                    a().emit("updateFacets", r(e));
                }),
                l()("body").on("click", a().themeSelectors.listing.searchLink, function (e) {
                    e.preventDefault(), a().emit("updateFacets", l()(e.target).closest("a").get(0).href);
                }),
                l()(a().themeSelectors.listing.list).length &&
                    window.addEventListener("popstate", function (e) {
                        e = e.state;
                        window.location.href = e && e.current_url ? e.current_url : t;
                    }),
                l()("body").on("change", "".concat(a().themeSelectors.listing.searchFilters, " select"), function (e) {
                    e = l()(e.target).closest("form");
                    a().emit("updateFacets", "?".concat(e.serialize()));
                }),
                a().on("updateProductList", function (e) {
                    !(function (e) {
                        l()(a().themeSelectors.listing.searchFilters).replaceWith(e.rendered_facets),
                            l()(a().themeSelectors.listing.activeSearchFilters).replaceWith(e.rendered_active_filters),
                            l()(a().themeSelectors.listing.listTop).replaceWith(e.rendered_products_top);
                        var t = l()(e.rendered_products),
                            n = l()(a().themeSelectors.listing.product, t);
                        0 < n.length && n.removeClass().addClass(l()(a().themeSelectors.listing.product).first().attr("class"));
                        l()(a().themeSelectors.listing.list).replaceWith(t),
                            l()(a().themeSelectors.listing.listBottom).replaceWith(e.rendered_products_bottom),
                            e.rendered_products_header && l()(a().themeSelectors.listing.listHeader).replaceWith(e.rendered_products_header);
                        new s().init();
                    })(e),
                        window.scrollTo(0, 0);
                });
        });
        var u = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, n, i;
            return t = e, (n = [{
                key: "init",
                value: function() {
                    var t = this,
                        e = l()(".js-modal-arrows"),
                        n = l()(".js-modal-product-images");
                    l()("body").on("click", ".js-modal-thumb", function(e) {
						l()(".js-modal-thumb").hasClass("selected") && l()(".js-modal-thumb").removeClass("selected"),
                        l()(e.currentTarget).addClass("selected"),
                        l()(".js-modal-product-cover").attr("src", l()(e.target).data("image-large-src")),
                        l()(".js-modal-product-cover").attr("title", l()(e.target).attr("title")),
                        l()(".js-modal-product-cover").attr("alt", l()(e.target).attr("alt"));
                    })
					.on("click", "aside#thumbnails", function(e) {
                        "thumbnails" === e.target.id && l()("#product-modal").modal("hide")
                    }), 
                                l()(".js-modal-product-images li").length <= 5
                                    ? e.css("opacity", ".2")
                                    : e.on("click", function (e) {
                                          l()(e.target).hasClass("arrow-up") && n.position().top < 0
                                              ? (t.move("up"), l()(".js-modal-arrow-down").css("opacity", "1"))
                                              : l()(e.target).hasClass("arrow-down") && n.position().top + n.height() > l()(".js-modal-mask").height() && (t.move("down"), l()(".js-modal-arrow-up").css("opacity", "1"));
                                      });
                },
            }, {
                        key: "move",
                        value: function (e) {
                            var t = l()(".js-modal-product-images"),
                                n = l()(".js-modal-product-images li img").height() + 10,
                                i = t.position().top;
                            t.velocity({ translateY: "up" === e ? i + n : i - n }, function () {
                                0 <= t.position().top ? l()(".js-modal-arrow-up").css("opacity", ".2") : t.position().top + t.height() <= l()(".js-modal-mask").height() && l()(".js-modal-arrow-down").css("opacity", ".2");
                            });
                }
            }]) && c(t.prototype, n), i && c(t, i), Object.defineProperty(t, "prototype", {
                writable: !1
            }), e
        }();
        l()(document).ready(function() {
            var t, e;

            function i() {
                function i(e, t) {
                    t = t.find(a().themeSelectors.product.thumb), l()(a().themeSelectors.product.modalProductCover).attr("src", t.data("image-large-src")), e.removeClass("selected"), t.addClass("selected"), n.prop("src", t.data("image-medium-src"))
                }
                var n = l()(a().themeSelectors.product.cover),
                    r = l()(a().themeSelectors.product.selected);
                l()(a().themeSelectors.product.thumb).on("click", function (e) {
                    (r = l()(a().themeSelectors.product.selected)), i(r, l()(e.target).closest(a().themeSelectors.product.thumbContainer));
                     l()(a().themeSelectors.product.cover).attr("src", l()(e.target).data("zoom-image"));
                    l()(a().themeSelectors.product.cover).prop({src: l()(e.currentTarget).data("image-large-src"),zoom: l()(e.currentTarget).data("zoom-image")});
                    l()(".js-qv-product-cover1").attr("src",  l()(e.target).data("zoom-image")),l()(".js-qv-product-cover1").prop("zoom", l()(e.target).data("zoom-image"));
}),
                    n.swipe({
                        swipe: function (e, t) {
                            var n = (r = l()(a().themeSelectors.product.selected)).closest(a().themeSelectors.product.thumbContainer);
                            "right" === t ? (0 < n.prev().length ? i(r, n.prev()) : 0 < n.next().length && i(r, n.next())) : "left" === t && (0 < n.next().length ? i(r, n.next()) : 0 < n.prev().length && i(r, n.prev()));
                        },
                        allowPageScroll: "vertical",
                    });
            }

            function r() {
                2 < l()("#main .js-qv-product-images li").length ? (l()("#main .js-qv-mask").addClass("scroll"), l()(".scroll-box-arrows").addClass("scroll"), l()("#main .js-qv-mask").scrollbox({
                    direction: "h",
                    distance: 113,
                    autoPlay: !1
                }), l()(".scroll-box-arrows .left").click(function() {
                    l()("#main .js-qv-mask").trigger("backward")
                }), l()(".scroll-box-arrows .right").click(function() {
                    l()("#main .js-qv-mask").trigger("forward")
                })) : (l()("#main .js-qv-mask").removeClass("scroll"), l()(".scroll-box-arrows").removeClass("scroll"))
            }

            function o() {
                l()(a().themeSelectors.fileInput).on("change", function(e) {
                    var t;
                    (e = l()(e.currentTarget)[0]) && (t = e.files[0]) && l()(e).prev().text(t.name)
                })
            }(t = l()(a().selectors.quantityWanted)).TouchSpin({
                verticalbuttons: !0,
                verticalupclass: "material-icons touchspin-up",
                verticaldownclass: "material-icons touchspin-down",
                buttondown_class: "btn btn-touchspin js-touchspin",
                buttonup_class: "btn btn-touchspin js-touchspin",
                min: parseInt(t.attr("min"), 10),
                max: 1e6
            }), l()(a().themeSelectors.touchspin).off("touchstart.touchspin"), t.focusout(function() {
                ("" === t.val() || t.val() < t.attr("min")) && (t.val(t.attr("min")), t.trigger("change"))
            }), l()("body").on("change keyup", a().selectors.quantityWanted, function(e) {
                "" !== t.val() && (l()(e.currentTarget).trigger("touchspin.stopspin"), a().emit("updateProduct", {
                    eventType: "updatedProductQuantity",
                    event: e
                }))
            }), o(), i(), r(), (e = l()(a().themeSelectors.product.tabs)).on("show.bs.tab", function(e) {
                e = l()(e.target);
                e.addClass(a().themeSelectors.product.activeNavClass), l()(e.attr("href")).addClass(a().themeSelectors.product.activeTabClass)
            }), e.on("hide.bs.tab", function(e) {
                e = l()(e.target);
                e.removeClass(a().themeSelectors.product.activeNavClass), l()(e.attr("href")).removeClass(a().themeSelectors.product.activeTabClass)
            }), a().on("updatedProduct", function(e) {
                var t, n;
                o(), i(), e && e.product_minimal_quantity && (t = parseInt(e.product_minimal_quantity, 10), n = a().selectors.quantityWanted, l()(n).trigger("touchspin.updatesettings", { min: t})),
                $('#main #zoom1').zoom(),
                        productadditional("#main #tt-jqzoom"),
                 r(), l()(l()(a().themeSelectors.product.activeTabs).attr("href")).addClass("active").removeClass("fade"), l()(a().themeSelectors.product.imagesModal).replaceWith(e.product_images_modal), (new u).init()
            })
        }), a().cart = a().cart || {}, a().cart.active_inputs = null;
        var f = 'input[name="product-quantity-spin"]',
            n = !1,
            d = !1,
            p = "";

        function h() {
            l().each(l()(f), function(e, t) {
                l()(t).TouchSpin({
                    verticalbuttons: !0,
                    verticalupclass: "material-icons touchspin-up",
                    verticaldownclass: "material-icons touchspin-down",
                    buttondown_class: "btn btn-touchspin js-touchspin js-increase-product-quantity",
                    buttonup_class: "btn btn-touchspin js-touchspin js-decrease-product-quantity",
                    min: parseInt(l()(t).attr("min"), 10),
                    max: 1e6
                })
            }), l()(a().themeSelectors.touchspin).off("touchstart.touchspin"), m.switchErrorStat()
        }
        l()(document).ready(function() {
            var i = ".js-cart-line-product-quantity",
                o = [];
            a().on("updateCart", function() {
                l()(".quickview").modal("hide")
            }), a().on("updatedCart", function() {
                h()
            }), h();
            var e = l()("body");

            function r(e, t) {
                if ("on.startupspin" !== (n = t) && "on.startdownspin" !== n) return {
                    url: e.attr("href"),
                    type: function(e) {
                        for (var t, n = e.split("-"), i = "", r = 0; r < n.length; r += 1) t = n[r], i += t = 0 !== r ? t.substring(0, 1).toUpperCase() + t.substring(1) : t;
                        return i
                    }(e.data("link-action"))
                };
                var n, e = (e = (e = e).parents(".bootstrap-touchspin").find(i)).is(":focus") ? null : e;
                if (!e) return !1;
                return "on.startupspin" === t ? {
                    url: e.data("up-url"),
                    type: "increaseProductQuantity"
                } : {
                    url: e.data("down-url"),
                    type: "decreaseProductQuantity"
                }
            }

            function t(e) {
                e.preventDefault();
                var n = l()(e.currentTarget),
                    i = e.currentTarget.dataset,
                    t = r(n, e.namespace);
                t && (s(), l().ajax({
                    url: t.url,
                    method: "POST",
                    data: {
                        ajax: "1",
                        action: "update"
                    },
                    dataType: "json",
                    beforeSend: function(e) {
                        o.push(e)
                    }
                }).then(function(e) {
                    var t;
                    m.checkUpdateOpertation(e), (t = n, l()(t.parents(".bootstrap-touchspin").find("input"))).val(e.quantity), a().emit("updateCart", {
                        reason: i,
                        resp: e
                    })
                }).fail(function(e) {
                    a().emit("handleError", {
                        eventType: "updateProductInCart",
                        resp: e,
                        cartAction: t.type
                    })
                }))
            }
            var s = function() {
                for (; 0 < o.length;) o.pop().abort()
            };

            function n(e) {
                var n, t = l()(e.currentTarget),
                    i = t.data("update-url"),
                    r = t.attr("value"),
                    e = t.val();
                e != parseInt(e, 10) || e < 0 || isNaN(e) ? t.val(r) : 0 != (r = e - r) && (t.attr("value", e), i = i, r = r, r = {
                    ajax: "1",
                    qty: Math.abs(r),
                    action: "update",
                    op: 0 < r ? "up" : "down"
                }, n = t, s(), l().ajax({
                    url: i,
                    method: "POST",
                    data: r,
                    dataType: "json",
                    beforeSend: function(e) {
                        o.push(e)
                    }
                }).then(function(e) {
                    var t;
                    m.checkUpdateOpertation(e), n.val(e.quantity), t = n && n.dataset ? n.dataset : e, a().emit("updateCart", {
                        reason: t,
                        resp: e
                    })
                }).fail(function(e) {
                    a().emit("handleError", {
                        eventType: "updateProductQuantityInCart",
                        resp: e
                    })
                }))
            }
            e.on("click", '[data-link-action="delete-from-cart"], [data-link-action="remove-voucher"]', t), e.on("touchspin.on.startdownspin", f, t), e.on("touchspin.on.startupspin", f, t), e.on("focusout keyup", i, function(e) {
                return ("keyup" !== e.type || 13 === e.keyCode) && n(e), !1
            });
            e.on("hidden.bs.collapse", "#promo-code", function() {
                l()(".display-promo").show(400)
            }), e.on("click", ".promo-code-button", function(e) {
                e.preventDefault(), l()("#promo-code").collapse("toggle")
            }), e.on("click", ".display-promo", function(e) {
                l()(e.currentTarget).hide(400)
            }), e.on("click", ".js-discount .code", function(e) {
                e.stopPropagation();
                e = l()(e.currentTarget);
                return l()("[name=discount_name]").val(e.text()), l()("#promo-code").collapse("show"), l()(".display-promo").hide(400), !1
            })
        });
        var m = {
                switchErrorStat: function() {
                    var e, t = l()(".checkout a");
                    (l()("#notifications article.alert-danger").length || "" !== p && !n) && t.addClass("disabled"), "" !== p ? (e = ' <article class="alert alert-danger" role="alert" data-alert="danger"><ul><li>'.concat(p, "</li></ul></article>"), l()("#notifications .container").html(e), p = "", d = !1, n && t.removeClass("disabled")) : !n && d && (d = n = !1, l()("#notifications .container").html(""), t.removeClass("disabled"))
                },
                checkUpdateOpertation: function(e) {
                    n = e.hasOwnProperty("hasError");
                    e = e.errors || "";
                    p = e instanceof Array ? e.join(" ") : e, d = !0
                }
            },
            e = k(291),
            t = k.n(e);

        function g(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var y = function() {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.el = e
            }
            var e, n, i;
            return e = t, (n = [{
                key: "init",
                value: function() {
                    this.el.on("show.bs.dropdown", function(e, t) {
                        (t ? l()("#".concat(t)) : l()(e.target)).find(".dropdown-menu").first().stop(!0, !0).slideDown()
                    }), this.el.on("hide.bs.dropdown", function(e, t) {
                        (t ? l()("#".concat(t)) : l()(e.target)).find(".dropdown-menu").first().stop(!0, !0).slideUp()
                    }), this.el.find("select.link").each(function(e, t) {
                        l()(t).on("change", function() {
                            window.location = l()(this).val()
                        })
                    })
                }
            }]) && g(e.prototype, n), i && g(e, i), Object.defineProperty(e, "prototype", {
                writable: !1
            }), t
        }();

        function v(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var b = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, n, i;
            return t = e, (n = [{
                key: "init",
                value: function() {
                    this.parentFocus(), this.togglePasswordVisibility()
                }
            }, {
                key: "parentFocus",
                value: function() {
                    l()(".js-child-focus").focus(function() {
                        l()(this).closest(".js-parent-focus").addClass("focus")
                    }), l()(".js-child-focus").focusout(function() {
                        l()(this).closest(".js-parent-focus").removeClass("focus")
                    })
                }
            }, {
                key: "togglePasswordVisibility",
                value: function() {
                    l()('button[data-action="show-password"]').on("click", function() {
                        var e = l()(this).closest(".input-group").children("input.js-visible-password");
                        "password" === e.attr("type") ? (e.attr("type", "text"), l()(this).text(l()(this).data("textHide"))) : (e.attr("type", "password"), l()(this).text(l()(this).data("textShow")))
                    })
                }
            }]) && v(t.prototype, n), i && v(t, i), Object.defineProperty(t, "prototype", {
                writable: !1
            }), e
        }();

        function w(e) {
            return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function S(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function x() {
            return (x = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var i = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = C(e)););
                    return e
                }(e, t);
                if (i) {
                    t = Object.getOwnPropertyDescriptor(i, t);
                    return t.get ? t.get.call(arguments.length < 3 ? e : n) : t.value
                }
            }).apply(this, arguments)
        }

        function _(e, t) {
            return (_ = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function T(n) {
            var i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var e, t = C(n);
                return function(e, t) {
                    {
                        if (t && ("object" === w(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined")
                    }
                    return function(e) {
                        if (void 0 !== e) return e;
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                    }(e)
                }(this, i ? (e = C(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
            }
        }

        function C(e) {
            return (C = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        var E, A = function() {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                Object.defineProperty(e, "prototype", {
                    value: Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    writable: !1
                }), t && _(e, t)
            }(r, y);
            var e, t, n, i = T(r);

            function r() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, r), i.apply(this, arguments)
            }
            return e = r, (t = [{
                key: "init",
                value: function() {
                    var n, i = this,
                        e = this;
                    this.el.find("li").hover(function(e) {
                        var t;
                        i.el.parent().hasClass("mobile") || (t = l()(e.currentTarget).attr("class"), n !== t && (t = Array.prototype.slice.call(e.currentTarget.classList).map(function(e) {
                            return "string" == typeof e && ".".concat(e)
                        }), (n = t.join("")) && 0 === l()(e.target).data("depth") && l()("".concat(n, " .js-sub-menu")).css({
                            top: l()("".concat(n)).height() + l()("".concat(n)).position().top
                        })))
                    }), l()("#menu-icon").on("click", function() {
                        l()("#mobile_top_menu_wrapper").toggle(), e.toggleMobileMenu()
                    }), this.el.on("click", function(e) {
                        i.el.parent().hasClass("mobile") || e.stopPropagation()
                    }), a().on("responsive update", function() {
                        l()(".js-sub-menu").removeAttr("style"), e.toggleMobileMenu()
                    }), x(C(r.prototype), "init", this).call(this)
                }
            }, {
                key: "toggleMobileMenu",
                value: function() {
                    l()("#header").toggleClass("is-open"), l()("#mobile_top_menu_wrapper").is(":visible") ? l()("#notifications, #wrapper, #footer").hide() : l()("#notifications, #wrapper, #footer").show()
                }
            }]) && S(e.prototype, t), n && S(e, n), Object.defineProperty(e, "prototype", {
                writable: !1
            }), r
        }();
        k(46), k(356);
        for (E in a().blockcart = a().blockcart || {}, a().blockcart.showModal = function(e) {
                function t() {
                    return l()("#blockcart-modal")
                }
                var n = t();
                n.length && n.remove(), l()("body").append(e), (n = t()).modal("show").on("hidden.bs.modal", function(e) {
                    a().emit("updateProduct", {
                        reason: e.currentTarget.dataset,
                        event: e
                    })
                })
            }, t().prototype) a()[E] = t().prototype[E];
        l()(document).ready(function() {
            var e = l()(".js-dropdown"),
                t = new b,
                n = l()('.js-top-menu ul[data-depth="0"]'),
                i = new y(e),
                r = new A(n),
                e = new s,
                n = new u;
            i.init(), t.init(), r.init(), e.init(), n.init(), l()('.carousel[data-touch="true"]').swipe({
                swipe: function(e, t) {
                    "left" === t && l()(this).carousel("next"), "right" === t && l()(this).carousel("prev")
                },
                allowPageScroll: "vertical"
            })
        })
    }()
}();