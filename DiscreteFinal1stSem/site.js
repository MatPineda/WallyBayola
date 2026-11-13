//A.
const q1a = "t";
const q2a = "2";
const q3a = ["simp", "simplification"];
const q4a = "~~t";
const q5a = "3";
const q6a = ["dn","double negation", "doublenegation"];
const q7a = "~(rvs)";
const q8a = ["1,4","4,1"]; 
const q9a = ["dm","demorgan'stheorem","demorgantheorem","demorganstheorem"];
//B.
const q10a = "p->q"; 
const q11a = "1";
const q12a = ["impl","materialimplification"];
const q13a = "q->r";
const q14a = "2";
const q15a = ["trans","transposition"];
const q16a = "p->r";
const q17a = ["4,5","5,4"]; 
const q18a = ["hs","hypotheticalsyllogism"];
const q19a = "p->s";
const q20a = ["6,3","3,6"]; 
const q21a = ["hs","hypotheticalsyllogism"];
//C.
const q22a = "~sv(p^q)";
const q23a = "3";
const q24a = ["dist","distribution"];
const q25a = "(pvq)v~s";
const q26a = "4";
const q27a = ["com","commutativity"];
const q28a = ["((p^q)->r)^(~s->~t)","[(p^q)->r]^(~s->~t)"];
const q29a = ["1,2","2,1"]; 
const q30a = ["conj","conjunction"];
const q31a = "rv~t";
const q32a = ["6,5","5,6"]; 
const q33a = ["cd","constructivedilemma"];
const q34a = "~tvr";
const q35a = "7";
const q36a = ["com","commutativity"];
const q37a = "t->r";
const q38a = "8";
const q39a = ["impl","materialimplification"];
//D.
const q40a = "~~av~b";
const q41a = "1";
const q42a = ["dm","demorgan'stheorem","demorgantheorem","demorganstheorem"];
const q43a = "~bv~~a";
const q44a = "5";
const q45a = ["com","commutativity"];
const q46a = "~~a";
const q47a = ["6,2","2,6"]; 
const q48a = ["ds", "disjunctivesyllogism"];
const q49a = "a";
const q50a = "7";
const q51a = ["dn","doublenegation"];
const q52a = "cvd";
const q53a = ["3,8","8,3"];
const q54a = ["mp", "modusponens"];
const q55a = "~c";
const q56a = "4";
const q57a = ["dn", "doublenegation"];
const q58a = "d";
const q59a = ["9,10","10,9"];
const q60a = ["ds", "disjunctivesyllogism"];
//E.
const q61a = "av(bvc)";
const q62a = "1";
const q63a = ["assoc", "associativity"];
const q64a = "bvc";
const q65a = ["6,2","2,6"];
const q66a = ["ds", "disjunctivesyllogism"];
const q67a = "(b->d)^(c->d)";
const q68a = ["3,4","4,3"];
const q69a = ["conj", "conjuction"];
const q70a = "dvd";
const q71a = ["8,7","7,8"];
const q72a = ["cd","constructivedilemma"];
const q73a = "d";
const q74a = "9";
const q75a = ["tau", "tautology"];
const q76a = "e^(f^g)";
const q77a = "5";
const q78a = ["assoc", "associativity"];
const q79a = "d^(e^(f^g))";
const q80a = ["10,11","11,10"];
const q81a = ["conj", "conjuction"];
//F
const q82a = "~~a^~~d";
const q83a = "1";
const q84a = ["dm","demorgan'stheorem","demorgantheorem","demorganstheorem"];
const q85a = "~~a";
const q86a = "4";
const q87a = ["simp", "simplification"];
const q88a = "a";
const q89a = "5";
const q90a = ["dn","double negation", "doublenegation"];
const q91a = "avb";
const q92a = "6";
const q93a = ["add", "addition"];
const q94a = "~~(avb) ";
const q95a = "7";
const q96a = ["dn","double negation", "doublenegation"];
const q97a = "~~c";
const q98a = ["2,8","8,2"];
const q99a = ["mt", "modustollens"];
const q100a = "c";
const q101a = "9";
const q102a = ["dn","double negation", "doublenegation"];
const q103a = "cvf";
const q104a = "10";
const q105a = ["add", "addition"];
const q106a = "g";
const q107a = ["3,11","11,3"];
const q108a = ["mp", "modusponens"];
//G.
const q109a = "~av~~b";
const q110a = "1";
const q111a = ["dm","demorgan'stheorem","demorgantheorem","demorganstheorem"];
const q112a = "~avb";
const q113a = "5";
const q114a = ["dn", "doublenegation"];
const q115a = "a->b";
const q116a = "6";
const q117a = ["impl","materialimplification"];
const q118a = "b->c";
const q119a = "2";
const q120a = ["impl","materialimplification"];
const q121a = "~cv~~(dve)";
const q122a = "3";
const q123a = ["dm","demorgan'stheorem","demorgantheorem","demorganstheorem"];
const q124a = "~cv(dve)";
const q125a = "9";
const q126a = ["dn", "doublenegation"];
const q127a = "c->(dve)";
const q128a = "10";
const q129a = ["impl","materialimplification"];
const q130a = "a->c";
const q131a = ["7,8","8,7"];
const q132a = ["hs","hypotheticalsyllogism"];
const q133a = "a->(dve)";
const q134a = ["12,11","11,12"];
const q135a = ["hs","hypotheticalsyllogism"];
const q136a = "~(dve)";
const q137a = "4";
const q138a = ["dm","demorgan'stheorem","demorgantheorem","demorganstheorem"];
const q139a = "~a";
const q140a = ["13,14","14,13"];
const q141a = ["mt", "modustollens"];
//H.
const q142a = "~(~ave)";
const q143a = "2";
const q144a = ["impl","materialimplification"];
const q145a = "~~a^~e";
const q146a = "4";
const q147a = ["dm","demorgan'stheorem","demorgantheorem","demorganstheorem"];
const q148a = "~~a";
const q149a = "5";
const q150a = ["simp", "simplification"];
const q151a = "a";
const q152a = "6";
const q153a = ["dn", "doublenegation"];
const q154a = "((a^b)^c)->d";
const q155a = "1";
const q156a = ["exp", "exportation"];
const q157a = "(a^(b^c))->d";
const q158a = "8";
const q159a = ["assoc", "associativity"];
const q160a = "a->((b^c)->d)";
const q161a = "9";
const q162a = ["exp", "exportation"];
const q163a = "(b^c)->d";
const q164a = ["10,7","7,10"];
const q165a = ["mp", "modusponens"];
const q166a = "~(b^c)";
const q167a = ["11,3","3,11"];
const q168a = ["mt", "modustollens"];
const q169a = "~bv~c";
const q170a = "12";
const q171a = ["dm","demorgan'stheorem","demorgantheorem","demorganstheorem"];
const q172a = "b->~c";
const q173a = "13";
const q174a = ["impl","materialimplification"];
//I.
const q175a = "~((a^b)v(~a^~b))";
const q176a = "1";
const q177a = ["equiv", "materialequivalence"];
const q178a = "~(a^b)^~(~a^~b)";
const q179a = "4";
const q180a = ["dm","demorgan'stheorem","demorgantheorem","demorganstheorem"];
const q181a = "~(~a^~b)^~(a^b)";
const q182a = "5";
const q183a = ["com","commutativity"];
const q184a = "~(~a^~b)";
const q185a = "6";
const q186a = ["simp", "simplification"];
const q187a = "~~av~~b";
const q188a = "7";
const q189a = ["dm","demorgan'stheorem","demorgantheorem","demorganstheorem"];
const q190a = "av~~b";
const q191a = "8";
const q192a = ["dn", "doublenegation"];
const q193a = "avb";
const q194a = "9";
const q195a = ["dn", "doublenegation"];
const q196a = "(a->c)^(b->c)";
const q197a = ["2,3","3,2"];
const q198a = ["conj", "conjuction"];
const q199a = "cvc";
const q200a = ["11,10","10,11"];
const q201a = ["cd","constructivedilemma"];
const q202a = "c";
const q203a = "12";
const q204a = ["tau", "tautology"];
//J.
const q205a = "(pvq)->s";
const q206a = "1";
const q207a = ["trans", "transposition"];
const q208a = "~sv~~r";
const q209a = "2";
const q210a = ["dm","demorgan'stheorem","demorgantheorem","demorganstheorem"];
const q211a = "~svr";
const q212a = "8";
const q213a = ["dn", "doublenegation"];
const q214a = "s->r";
const q215a = "9";
const q216a = ["impl","materialimplification"];
const q217a = "(pvq)->r";
const q218a = ["7,10","10,7"];
const q219a = ["hs","hypotheticalsyllogism"];
const q220a = "~~pv~~q";
const q221a = "3";
const q222a = ["dm","demorgan'stheorem","demorgantheorem","demorganstheorem"];
const q223a = "pv~~q"
const q224a = "12";
const q225a = ["dn", "doublenegation"];
const q226a = "pvq";
const q227a = "13";
const q228a = ["dn", "doublenegation"];
const q229a = "r";
const q230a = ["11,14","14,11"];
const q231a = ["mp", "modusponens"];
const q232a = "r->t";
const q233a = "4";
const q234a = ["trans", "transposition"];
const q235a = "t";
const q236a = ["16,15","15,16"];
const q237a = ["mp", "modusponens"];
const q238a = "uvw";
const q239a = ["5,17","17,5"];
const q240a = ["mp", "modusponens"];
const q241a = "w";
const q242a = ["18,6","6,18"];
const q243a = ["ds", "disjunctivesyllogism"];

let correct = 0;





document.getElementById("submit2").disabled = true
document.getElementById("submit3").disabled = true
document.getElementById("submit5").disabled = true
document.getElementById("submit6").disabled = true
document.getElementById("submit7").disabled = true
document.getElementById("submit9").disabled = true
document.getElementById("submit10").disabled = true
document.getElementById("submit11").disabled = true
document.getElementById("submit12").disabled = true
document.getElementById("submit13").disabled = true
document.getElementById("submit15").disabled = true
document.getElementById("submit16").disabled = true
document.getElementById("submit17").disabled = true
document.getElementById("submit18").disabled = true
document.getElementById("submit19").disabled = true
document.getElementById("submit20").disabled = true
document.getElementById("submit22").disabled = true
document.getElementById("submit23").disabled = true
document.getElementById("submit24").disabled = true
document.getElementById("submit25").disabled = true
document.getElementById("submit26").disabled = true
document.getElementById("submit27").disabled = true
document.getElementById("submit29").disabled = true
document.getElementById("submit30").disabled = true
document.getElementById("submit31").disabled = true
document.getElementById("submit32").disabled = true
document.getElementById("submit33").disabled = true
document.getElementById("submit34").disabled = true
document.getElementById("submit35").disabled = true
document.getElementById("submit36").disabled = true













//A.
document.getElementById("submit1").onclick = function () {
    const ans1 = document.getElementById("q1").value.trim().toLowerCase();
    const newans1 = ans1.replace(/\s/g, '')
    const ans2 = document.getElementById("q2").value.trim().toLowerCase();
    const newans2 = ans2.replace(/\s/g, '')
    const ans3 = document.getElementById("q3").value.trim().toLowerCase();
    const newans3 = ans3.replace(/\s/g, '')

    if (newans1 === q1a) {
        correct += 1;
        document.getElementById("q1").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q1").style.backgroundColor = "red";

    }
    if (newans2 === q2a) {
        correct += 1;
        document.getElementById("q2").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q2").style.backgroundColor = "red";
    }
    if (q3a.includes(newans3)) {
        correct += 1;
        document.getElementById("q3").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q3").style.backgroundColor = "red";
    }
    document.getElementById("q1").disabled = true
    document.getElementById("q2").disabled = true
    document.getElementById("q3").disabled = true
    document.getElementById("score").textContent = 'Score: ' + correct;
    document.getElementById("submit1").disabled = true;
    document.getElementById("submit2").disabled = false;

};
document.getElementById("submit2").onclick = function () {

    const ans4 = document.getElementById("q4").value.trim().toLowerCase();
    const newans4 = ans4.replace(/\s/g, '')
    const ans5 = document.getElementById("q5").value.trim().toLowerCase();
    const newans5 = ans5.replace(/\s/g, '')
    const ans6 = document.getElementById("q6").value.trim().toLowerCase();
    const newans6 = ans6.replace(/\s/g, '')

    if (newans4 === q4a) {
        correct += 1;
        document.getElementById("q4").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q4").style.backgroundColor = "red";
    }
    if (newans5 === q5a) {
        correct += 1;
        document.getElementById("q5").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q5").style.backgroundColor = "red";
    }
    if (q6a.includes(newans6)) {
        correct += 1;
        document.getElementById("q6").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q6").style.backgroundColor = "red";
    }
    document.getElementById("q4").disabled = true
    document.getElementById("q5").disabled = true
    document.getElementById("q6").disabled = true
    document.getElementById("score").textContent = 'Score: ' + correct;
    document.getElementById("submit2").disabled = true;
    document.getElementById("submit3").disabled = false

};
document.getElementById("submit3").onclick = function () {
    const ans7 = document.getElementById("q7").value.trim().toLowerCase();
    const newans7 = ans7.replace(/\s/g, '')
    const ans8 = document.getElementById("q8").value.trim().toLowerCase();
    const newans8 = ans8.replace(/\s/g, '')
    const ans9 = document.getElementById("q9").value.trim().toLowerCase();
    const newans9 = ans9.replace(/\s/g, '')

    if (newans7 === q7a) {
        correct += 1;
        document.getElementById("q7").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q7").style.backgroundColor = "red";
    }
    if (q8a.includes(newans8)) {
        correct += 1;
        document.getElementById("q8").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q8").style.backgroundColor = "red";
    }
    if (q9a.includes(newans9)) {
        correct += 1;
        document.getElementById("q9").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q9").style.backgroundColor = "red";
    }
    document.getElementById("q7").disabled = true
    document.getElementById("q8").disabled = true
    document.getElementById("q9").disabled = true
    document.getElementById("score").textContent = 'Score: ' + correct;
    document.getElementById("submit3").disabled = true;
};
//B.
document.getElementById("submit4").onclick = function () {
    const ans10 = document.getElementById("q10").value.trim().toLowerCase()
    const newans10 = ans10.replace(/\s/g, '')
    const ans11 = document.getElementById("q11").value.trim().toLowerCase()
    const newans11 = ans11.replace(/\s/g, '')
    const ans12 = document.getElementById("q12").value.trim().toLowerCase()
    const newans12 = ans12.replace(/\s/g, '')

    if (newans10 === q10a) {
        correct += 1
        document.getElementById("q10").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q10").style.backgroundColor = "red";
    }
    if (newans11 === q11a) {
        correct += 1
        document.getElementById("q11").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q11").style.backgroundColor = "red";
    }
    if (q12a.includes(newans12)) {
        correct += 1
        document.getElementById("q12").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q12").style.backgroundColor = "red";
    }

    document.getElementById("q10").disabled = true
    document.getElementById("q11").disabled = true
    document.getElementById("q12").disabled = true    
    document.getElementById("submit4").disabled = true
    document.getElementById("submit5").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit5").onclick = function () {
    const ans13 = document.getElementById("q13").value.trim().toLowerCase()
    const newans13 = ans13.replace(/\s/g, '')
    const ans14 = document.getElementById("q14").value.trim().toLowerCase()
    const newans14 = ans14.replace(/\s/g, '')
    const ans15 = document.getElementById("q15").value.trim().toLowerCase()
    const newans15 = ans15.replace(/\s/g, '')

    if (newans13 === q13a) {
        correct += 1
        document.getElementById("q13").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q13").style.backgroundColor = "red";
    }
    if (newans14 === q14a) {
        correct += 1
        document.getElementById("q14").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q14").style.backgroundColor = "red"
    }
    if (q15a.includes(newans15)) {
        correct += 1
        document.getElementById("q15").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q15").style.backgroundColor = "red";
    }
    document.getElementById("q13").disabled = true
    document.getElementById("q14").disabled = true
    document.getElementById("q15").disabled = true
    document.getElementById("submit5").disabled = true
    document.getElementById("submit6").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;

}
document.getElementById("submit6").onclick = function () {
    const ans16 = document.getElementById("q16").value.trim().toLowerCase()
    const newans16 = ans16.replace(/\s/g, '')
    const ans17 = document.getElementById("q17").value.trim().toLowerCase()
    const newans17 = ans17.replace(/\s/g, '')
    const ans18 = document.getElementById("q18").value.trim().toLowerCase()
    const newans18 = ans18.replace(/\s/g, '')

    if (newans16 === q16a) {
        correct += 1
        document.getElementById("q16").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q16").style.backgroundColor = "red";
    }
    if (q17a.includes(newans17)) {
        correct += 1
        document.getElementById("q17").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q17").style.backgroundColor = "red";
    }
    if (q18a.includes(newans18)) {
        correct += 1
        document.getElementById("q18").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q18").style.backgroundColor = "red";
    }

    document.getElementById("q16").disabled = true
    document.getElementById("q17").disabled = true
    document.getElementById("q18").disabled = true
    document.getElementById("submit6").disabled = true
    document.getElementById("submit7").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
}
document.getElementById("submit7").onclick = function () {
    const ans19 = document.getElementById("q19").value.trim().toLowerCase()
    const newans19 = ans19.replace(/\s/g, '')
    const ans20 = document.getElementById("q20").value.trim().toLowerCase()
    const newans20 = ans20.replace(/\s/g, '')
    const ans21 = document.getElementById("q21").value.trim().toLowerCase()
    const newans21 = ans21.replace(/\s/g, '')

    if (newans19 === q19a) {
        correct += 1
        document.getElementById("q19").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q19").style.backgroundColor = "red"
    }
    if (q20a.includes(newans20)) {
        correct += 1
        document.getElementById("q20").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q20").style.backgroundColor = "red"
    }
    if (q21a.includes(newans21)) {
        correct += 1
        document.getElementById("q21").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q21").style.backgroundColor = "red"
    }
    document.getElementById("q19").disabled = true
    document.getElementById("q20").disabled = true
    document.getElementById("q21").disabled = true
    document.getElementById("submit7").disabled = true
    document.getElementById("score").textContent = 'Score: ' + correct;
};

//C.
document.getElementById("submit8").onclick = function () {
    const ans22 = document.getElementById("q22").value.trim().toLowerCase()
    const newans22 = ans22.replace(/\s/g, '')
    const ans23 = document.getElementById("q23").value.trim().toLowerCase()
    const newans23 = ans23.replace(/\s/g, '')
    const ans24 = document.getElementById("q24").value.trim().toLowerCase()
    const newans24 = ans24.replace(/\s/g, '')

    if (newans22 === q22a) {
        correct += 1
        document.getElementById("q22").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q22").style.backgroundColor = "red"
    }
    if (newans23 === q23a) {
        correct += 1
        document.getElementById("q23").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q23").style.backgroundColor = "red"
    }
    if (q24a.includes(newans24)) {
        correct += 1
        document.getElementById("q24").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q24").style.backgroundColor = "red"
    }
    document.getElementById("q22").disabled = true
    document.getElementById("q23").disabled = true
    document.getElementById("q24").disabled = true
    document.getElementById("submit8").disabled = true
    document.getElementById("submit9").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit9").onclick = function () {
    const ans25 = document.getElementById("q25").value.trim().toLowerCase()
    const newans25 = ans25.replace(/\s/g, '')
    const ans26 = document.getElementById("q26").value.trim().toLowerCase()
    const newans26 = ans26.replace(/\s/g, '')
    const ans27 = document.getElementById("q27").value.trim().toLowerCase()
    const newans27 = ans27.replace(/\s/g, '')

    if (newans25 === q25a) {
        correct += 1
        document.getElementById("q25").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q25").style.backgroundColor = "red"
    }
    if (newans26 === q26a) {
        correct += 1
        document.getElementById("q26").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q26").style.backgroundColor = "red"
    }
    if (q27a.includes(newans27)) {
        correct += 1
        document.getElementById("q27").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q27").style.backgroundColor = "red"
    }
    document.getElementById("q25").disabled = true
    document.getElementById("q26").disabled = true
    document.getElementById("q27").disabled = true
    document.getElementById("submit9").disabled = true
    document.getElementById("submit10").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit10").onclick = function () {
    const ans28 = document.getElementById("q28").value.trim().toLowerCase()
    const newans28 = ans28.replace(/\s/g, '')
    const ans29 = document.getElementById("q29").value.trim().toLowerCase()
    const newans29 = ans29.replace(/\s/g, '')
    const ans30 = document.getElementById("q30").value.trim().toLowerCase()
    const newans30 = ans30.replace(/\s/g, '')

    if (q28a.includes(newans28)) {
        correct += 1
        document.getElementById("q28").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q28").style.backgroundColor = "red"
    }
    if (q29a.includes(newans29)) {
        correct += 1
        document.getElementById("q29").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q29").style.backgroundColor = "red"
    }
    if (q30a.includes(newans30)) {
        correct += 1
        document.getElementById("q30").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q30").style.backgroundColor = "red"
    }
    document.getElementById("q28").disabled = true
    document.getElementById("q29").disabled = true
    document.getElementById("q30").disabled = true
    document.getElementById("submit10").disabled = true
    document.getElementById("submit11").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit11").onclick = function () {
    const ans31 = document.getElementById("q31").value.trim().toLowerCase()
    const newans31 = ans31.replace(/\s/g, '')
    const ans32 = document.getElementById("q32").value.trim().toLowerCase()
    const newans32 = ans32.replace(/\s/g, '')
    const ans33 = document.getElementById("q33").value.trim().toLowerCase()
    const newans33 = ans33.replace(/\s/g, '')

    if (newans31 === q31a) {
        correct += 1
        document.getElementById("q31").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q31").style.backgroundColor = "red"
    }
    if (q32a.includes(newans32)) {
        correct += 1
        document.getElementById("q32").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q32").style.backgroundColor = "red"
    }
    if (q33a.includes(newans33)) {
        correct += 1
        document.getElementById("q33").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q33").style.backgroundColor = "red"
    }
    document.getElementById("q31").disabled = true
    document.getElementById("q32").disabled = true
    document.getElementById("q33").disabled = true
    document.getElementById("submit11").disabled = true
    document.getElementById("submit12").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit12").onclick = function () {
    const ans34 = document.getElementById("q34").value.trim().toLowerCase()
    const newans34 = ans34.replace(/\s/g, '')
    const ans35 = document.getElementById("q35").value.trim().toLowerCase()
    const newans35 = ans35.replace(/\s/g, '')
    const ans36 = document.getElementById("q36").value.trim().toLowerCase()
    const newans36 = ans36.replace(/\s/g, '')

    if (newans34 === q34a) {
        correct += 1
        document.getElementById("q34").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q34").style.backgroundColor = "red"
    }
    if (newans35 === q35a) {
        correct += 1
        document.getElementById("q35").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q35").style.backgroundColor = "red"
    }
    if (q36a.includes(newans36)) {
        correct += 1
        document.getElementById("q36").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q36").style.backgroundColor = "red"
    }
    document.getElementById("q34").disabled = true
    document.getElementById("q35").disabled = true
    document.getElementById("q36").disabled = true
    document.getElementById("submit12").disabled = true
    document.getElementById("submit13").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit13").onclick = function () {
    const ans37 = document.getElementById("q37").value.trim().toLowerCase()
    const newans37 = ans37.replace(/\s/g, '')
    const ans38 = document.getElementById("q38").value.trim().toLowerCase()
    const newans38 = ans38.replace(/\s/g, '')
    const ans39 = document.getElementById("q39").value.trim().toLowerCase()
    const newans39 = ans39.replace(/\s/g, '')

    if (newans37 === q37a) {
        correct += 1
        document.getElementById("q37").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q37").style.backgroundColor = "red"
    }
    if (newans38 === q38a) {
        correct += 1
        document.getElementById("q38").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q38").style.backgroundColor = "red"
    }
    if (q39a.includes(newans39)) {
        correct += 1
        document.getElementById("q39").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q39").style.backgroundColor = "red"
    }
    document.getElementById("q37").disabled = true
    document.getElementById("q38").disabled = true
    document.getElementById("q39").disabled = true
    document.getElementById("submit13").disabled = true
    document.getElementById("score").textContent = 'Score: ' + correct;
};
//D.
document.getElementById("submit14").onclick = function () {
    const ans40 = document.getElementById("q40").value.trim().toLowerCase()
    const newans40 = ans40.replace(/\s/g, '')
    const ans41 = document.getElementById("q41").value.trim().toLowerCase()
    const newans41 = ans41.replace(/\s/g, '')
    const ans42 = document.getElementById("q42").value.trim().toLowerCase()
    const newans42 = ans42.replace(/\s/g, '')

    if (newans40 === q40a) {
        correct += 1
        document.getElementById("q40").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q40").style.backgroundColor = "red"
    }
    if (newans41 === q41a) {
        correct += 1
        document.getElementById("q41").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q41").style.backgroundColor = "red"
    }
    if (q42a.includes(newans42)) {
        correct += 1
        document.getElementById("q42").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q42").style.backgroundColor = "red"
    }
    document.getElementById("q40").disabled = true
    document.getElementById("q41").disabled = true
    document.getElementById("q42").disabled = true
    document.getElementById("submit14").disabled = true
    document.getElementById("submit15").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit15").onclick = function () {
    const ans43 = document.getElementById("q43").value.trim().toLowerCase()
    const newans43 = ans43.replace(/\s/g, '')
    const ans44 = document.getElementById("q44").value.trim().toLowerCase()
    const newans44 = ans44.replace(/\s/g, '')
    const ans45 = document.getElementById("q45").value.trim().toLowerCase()
    const newans45 = ans45.replace(/\s/g, '')

    if (newans43 === q43a) {
        correct += 1
        document.getElementById("q43").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q43").style.backgroundColor = "red"
    }
    if (newans44 === q44a) {
        correct += 1
        document.getElementById("q44").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q44").style.backgroundColor = "red"
    }
    if (q45a.includes(newans45)) {
        correct += 1
        document.getElementById("q45").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q45").style.backgroundColor = "red"
    }
    document.getElementById("q43").disabled = true
    document.getElementById("q44").disabled = true
    document.getElementById("q45").disabled = true
    document.getElementById("submit15").disabled = true
    document.getElementById("submit16").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit16").onclick = function () {
    const ans46 = document.getElementById("q46").value.trim().toLowerCase()
    const newans46 = ans46.replace(/\s/g, '')
    const ans47 = document.getElementById("q47").value.trim().toLowerCase()
    const newans47 = ans47.replace(/\s/g, '')
    const ans48 = document.getElementById("q48").value.trim().toLowerCase()
    const newans48 = ans48.replace(/\s/g, '')

    if (newans46 === q46a) {
        correct += 1
        document.getElementById("q46").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q46").style.backgroundColor = "red"
    }
    if (q47a.includes(newans47)) {
        correct += 1
        document.getElementById("q47").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q47").style.backgroundColor = "red"
    }
    if (q48a.includes(newans48)) {
        correct += 1
        document.getElementById("q48").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q48").style.backgroundColor = "red"
    }
    document.getElementById("q46").disabled = true
    document.getElementById("q47").disabled = true
    document.getElementById("q48").disabled = true
    document.getElementById("submit16").disabled = true
    document.getElementById("submit17").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit17").onclick = function () {
    const ans49 = document.getElementById("q49").value.trim().toLowerCase()
    const newans49 = ans49.replace(/\s/g, '')
    const ans50 = document.getElementById("q50").value.trim().toLowerCase()
    const newans50 = ans50.replace(/\s/g, '')
    const ans51 = document.getElementById("q51").value.trim().toLowerCase()
    const newans51 = ans51.replace(/\s/g, '')

    if (newans49 === q49a) {
        correct += 1
        document.getElementById("q49").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q49").style.backgroundColor = "red"
    }
    if (newans50 === q50a) {
        correct += 1
        document.getElementById("q50").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q50").style.backgroundColor = "red"
    }
    if (q51a.includes(newans51)) {
        correct += 1
        document.getElementById("q51").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q51").style.backgroundColor = "red"
    }
    document.getElementById("q49").disabled = true
    document.getElementById("q50").disabled = true
    document.getElementById("q51").disabled = true
    document.getElementById("submit17").disabled = true
    document.getElementById("submit18").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit18").onclick = function () {
    const ans52 = document.getElementById("q52").value.trim().toLowerCase()
    const newans52 = ans52.replace(/\s/g, '')
    const ans53 = document.getElementById("q53").value.trim().toLowerCase()
    const newans53 = ans53.replace(/\s/g, '')
    const ans54 = document.getElementById("q54").value.trim().toLowerCase()
    const newans54 = ans54.replace(/\s/g, '')

    if (newans52 === q52a) {
        correct += 1
        document.getElementById("q52").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q52").style.backgroundColor = "red"
    }
    if (q53a.includes(newans53)) {
        correct += 1
        document.getElementById("q53").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q53").style.backgroundColor = "red"
    }
    if (q54a.includes(newans54)) {
        correct += 1
        document.getElementById("q54").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q54").style.backgroundColor = "red"
    }
    document.getElementById("q52").disabled = true
    document.getElementById("q53").disabled = true
    document.getElementById("q54").disabled = true
    document.getElementById("submit18").disabled = true
    document.getElementById("submit19").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit19").onclick = function () {
    const ans55 = document.getElementById("q55").value.trim().toLowerCase()
    const newans55 = ans55.replace(/\s/g, '')
    const ans56 = document.getElementById("q56").value.trim().toLowerCase()
    const newans56 = ans56.replace(/\s/g, '')
    const ans57 = document.getElementById("q57").value.trim().toLowerCase()
    const newans57 = ans57.replace(/\s/g, '')

    if (newans55 === q55a) {
        correct += 1
        document.getElementById("q55").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q55").style.backgroundColor = "red"
    }
    if (newans56 === q56a) {
        correct += 1
        document.getElementById("q56").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q56").style.backgroundColor = "red"
    }
    if (q57a.includes(newans57)) {
        correct += 1
        document.getElementById("q57").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q57").style.backgroundColor = "red"
    }
    document.getElementById("q55").disabled = true
    document.getElementById("q56").disabled = true
    document.getElementById("q57").disabled = true
    document.getElementById("submit19").disabled = true
    document.getElementById("submit20").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit20").onclick = function () {
    const ans58 = document.getElementById("q58").value.trim().toLowerCase()
    const newans58 = ans58.replace(/\s/g, '')
    const ans59 = document.getElementById("q59").value.trim().toLowerCase()
    const newans59 = ans59.replace(/\s/g, '')
    const ans60 = document.getElementById("q60").value.trim().toLowerCase()
    const newans60 = ans60.replace(/\s/g, '')

    if (newans58 === q58a) {
        correct += 1
        document.getElementById("q58").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q58").style.backgroundColor = "red"
    }
    if (q59a.includes(newans59)) {
        correct += 1
        document.getElementById("q59").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q59").style.backgroundColor = "red"
    }
    if (q60a.includes(newans60)) {
        correct += 1
        document.getElementById("q60").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q60").style.backgroundColor = "red"
    }
    document.getElementById("q58").disabled = true
    document.getElementById("q59").disabled = true
    document.getElementById("q60").disabled = true
    document.getElementById("submit20").disabled = true
    document.getElementById("score").textContent = 'Score: ' + correct;
};
//E.
document.getElementById("submit21").onclick = function () {
    const ans61 = document.getElementById("q61").value.trim().toLowerCase()
    const newans61 = ans61.replace(/\s/g, '')
    const ans62 = document.getElementById("q62").value.trim().toLowerCase()
    const newans62 = ans62.replace(/\s/g, '')
    const ans63 = document.getElementById("q63").value.trim().toLowerCase()
    const newans63 = ans63.replace(/\s/g, '')

    if (newans61 === q61a) {
        correct += 1
        document.getElementById("q61").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q61").style.backgroundColor = "red"
    }
    if (newans62 === q62a) {
        correct += 1
        document.getElementById("q62").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q62").style.backgroundColor = "red"
    }
    if (q63a.includes(newans63)) {
        correct += 1
        document.getElementById("q63").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q63").style.backgroundColor = "red"
    }
    document.getElementById("q61").disabled = true
    document.getElementById("q62").disabled = true
    document.getElementById("q63").disabled = true
    document.getElementById("submit21").disabled = true
    document.getElementById("submit22").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit22").onclick = function () {
    const ans64 = document.getElementById("q64").value.trim().toLowerCase()
    const newans64 = ans64.replace(/\s/g, '')
    const ans65 = document.getElementById("q65").value.trim().toLowerCase()
    const newans65 = ans65.replace(/\s/g, '')
    const ans66 = document.getElementById("q66").value.trim().toLowerCase()
    const newans66 = ans66.replace(/\s/g, '')

    if (newans64 === q64a) {
        correct += 1
        document.getElementById("q64").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q64").style.backgroundColor = "red"
    }
    if (newans65 === q65a) {
        correct += 1
        document.getElementById("q65").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q65").style.backgroundColor = "red"
    }
    if (q66a.includes(newans66)) {
        correct += 1
        document.getElementById("q66").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q66").style.backgroundColor = "red"
    }
    document.getElementById("q64").disabled = true
    document.getElementById("q65").disabled = true
    document.getElementById("q66").disabled = true
    document.getElementById("submit22").disabled = true
    document.getElementById("submit23").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit23").onclick = function () {
    const ans67 = document.getElementById("q67").value.trim().toLowerCase()

    const newans67 = ans67.replace(/\s/g, '')
    const ans68 = document.getElementById("q68").value.trim().toLowerCase()
    const newans68 = ans68.replace(/\s/g, '')
    const ans69 = document.getElementById("q69").value.trim().toLowerCase()
    const newans69 = ans69.replace(/\s/g, '')

    if (newans67 === q67a) {
        correct += 1
        document.getElementById("q67").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q67").style.backgroundColor = "red"
    }
    if (q68a.includes(newans68)) {
        correct += 1
        document.getElementById("q68").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q68").style.backgroundColor = "red"
    }
    if (q69a.includes(newans69)) {
        correct += 1
        document.getElementById("q69").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q69").style.backgroundColor = "red"
    }
    document.getElementById("q67").disabled = true
    document.getElementById("q68").disabled = true
    document.getElementById("q69").disabled = true
    document.getElementById("submit23").disabled = true
    document.getElementById("submit24").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit24").onclick = function () {
    const ans70 = document.getElementById("q70").value.trim().toLowerCase()
    const newans70 = ans70.replace(/\s/g, '')
    const ans71 = document.getElementById("q71").value.trim().toLowerCase()
    const newans71 = ans71.replace(/\s/g, '')
    const ans72 = document.getElementById("q72").value.trim().toLowerCase()
    const newans72 = ans72.replace(/\s/g, '')

    if (newans70 === q70a) {
        correct += 1
        document.getElementById("q70").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q70").style.backgroundColor = "red"
    }
    if (newans71 === q71a) {
        correct += 1
        document.getElementById("q71").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q71").style.backgroundColor = "red"
    }
    if (q72a.includes(newans72)) {
        correct += 1
        document.getElementById("q72").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q72").style.backgroundColor = "red"
    }
    document.getElementById("q70").disabled = true
    document.getElementById("q71").disabled = true
    document.getElementById("q72").disabled = true
    document.getElementById("submit24").disabled = true
    document.getElementById("submit25").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit25").onclick = function () {
    const ans73 = document.getElementById("q73").value.trim().toLowerCase()
    const newans73 = ans73.replace(/\s/g, '')
    const ans74 = document.getElementById("q74").value.trim().toLowerCase()
    const newans74 = ans74.replace(/\s/g, '')
    const ans75 = document.getElementById("q75").value.trim().toLowerCase()
    const newans75 = ans75.replace(/\s/g, '')

    if (newans73 === q73a) {
        correct += 1
        document.getElementById("q73").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q73").style.backgroundColor = "red"
    }
    if (q74a === newans74) {
        correct += 1
        document.getElementById("q74").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q74").style.backgroundColor = "red"
    }
    if (q75a.includes(newans75)) {
        correct += 1
        document.getElementById("q75").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q75").style.backgroundColor = "red"
    }
    document.getElementById("q73").disabled = true
    document.getElementById("q74").disabled = true
    document.getElementById("q75").disabled = true
    document.getElementById("submit25").disabled = true
    document.getElementById("submit26").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit26").onclick = function () {
    const ans76 = document.getElementById("q76").value.trim().toLowerCase()
    const newans76 = ans76.replace(/\s/g, '')
    const ans77 = document.getElementById("q77").value.trim().toLowerCase()
    const newans77 = ans77.replace(/\s/g, '')
    const ans78 = document.getElementById("q78").value.trim().toLowerCase()
    const newans78 = ans78.replace(/\s/g, '')

    if (newans76 === q76a) {
        correct += 1
        document.getElementById("q76").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q76").style.backgroundColor = "red"
    }
    if (newans77 === q77a) {
        correct += 1
        document.getElementById("q77").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q77").style.backgroundColor = "red"
    }
    if (q78a.includes(newans78)) {
        correct += 1
        document.getElementById("q78").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q78").style.backgroundColor = "red"
    }
    document.getElementById("q76").disabled = true
    document.getElementById("q77").disabled = true
    document.getElementById("q78").disabled = true
    document.getElementById("submit26").disabled = true
    document.getElementById("submit27").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit27").onclick = function () {
    const ans79 = document.getElementById("q79").value.trim().toLowerCase()
    const newans79 = ans79.replace(/\s/g, '')
    const ans80 = document.getElementById("q80").value.trim().toLowerCase()
    const newans80 = ans80.replace(/\s/g, '')
    const ans81 = document.getElementById("q81").value.trim().toLowerCase()
    const newans81 = ans81.replace(/\s/g, '')

    if (newans79 === q79a) {
        correct += 1
        document.getElementById("q79").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q79").style.backgroundColor = "red"
    }
    if (q80a.includes(newans80)) {
        correct += 1
        document.getElementById("q80").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q80").style.backgroundColor = "red"
    }
    if (q81a.includes(newans81)) {
        correct += 1
        document.getElementById("q81").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q81").style.backgroundColor = "red"
    }
    document.getElementById("q79").disabled = true
    document.getElementById("q80").disabled = true
    document.getElementById("q81").disabled = true
    document.getElementById("submit27").disabled = true
    document.getElementById("score").textContent = 'Score: ' + correct;
};
//F.
document.getElementById("submit28").onclick = function () {
    const ans82 = document.getElementById("q82").value.trim().toLowerCase()
    const newans82 = ans82.replace(/\s/g, '')
    const ans83 = document.getElementById("q83").value.trim().toLowerCase()
    const newans83 = ans83.replace(/\s/g, '')
    const ans84 = document.getElementById("q84").value.trim().toLowerCase()
    const newans84 = ans84.replace(/\s/g, '')

    if (newans82 === q82a) {
        correct += 1
        document.getElementById("q82").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q82").style.backgroundColor = "red"
    }
    if (newans83 === q83a) {
        correct += 1
        document.getElementById("q83").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q83").style.backgroundColor = "red"
    }
    if (q84a.includes(newans84)) {
        correct += 1
        document.getElementById("q84").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q84").style.backgroundColor = "red"
    }
    document.getElementById("q82").disabled = true
    document.getElementById("q83").disabled = true
    document.getElementById("q84").disabled = true
    document.getElementById("submit28").disabled = true
    document.getElementById("submit29").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};  
document.getElementById("submit29").onclick = function () {
    const ans85 = document.getElementById("q85").value.trim().toLowerCase()
    const newans85 = ans85.replace(/\s/g, '')
    const ans86 = document.getElementById("q86").value.trim().toLowerCase()
    const newans86 = ans86.replace(/\s/g, '')
    const ans87 = document.getElementById("q87").value.trim().toLowerCase()
    const newans87 = ans87.replace(/\s/g, '')

    if (newans85 === q85a) {
        correct += 1
        document.getElementById("q85").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q85").style.backgroundColor = "red"
    }
    if (newans86 === q86a) {
        correct += 1
        document.getElementById("q86").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q86").style.backgroundColor = "red"
    }
    if (q87a.includes(newans87)) {
        correct += 1
        document.getElementById("q87").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q87").style.backgroundColor = "red"
    }
    document.getElementById("q85").disabled = true
    document.getElementById("q86").disabled = true
    document.getElementById("q87").disabled = true
    document.getElementById("submit29").disabled = true
    document.getElementById("submit30").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit30").onclick = function () {
    const ans88 = document.getElementById("q88").value.trim().toLowerCase()
    const newans88 = ans88.replace(/\s/g, '')
    const ans89 = document.getElementById("q89").value.trim().toLowerCase()
    const ans90 = document.getElementById("q90").value.trim().toLowerCase()
    const newans90 = ans90.replace(/\s/g, '')

    if (newans88 === q88a) {
        correct += 1
        document.getElementById("q88").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q88").style.backgroundColor = "red"
    }
    if (q89a === ans89) {
        correct += 1
        document.getElementById("q89").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q89").style.backgroundColor = "red"
    }
    if (q90a.includes(newans90)) {
        correct += 1
        document.getElementById("q90").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q90").style.backgroundColor = "red"
    }
    document.getElementById("q88").disabled = true
    document.getElementById("q89").disabled = true
    document.getElementById("q90").disabled = true
    document.getElementById("submit30").disabled = true
    document.getElementById("submit31").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit31").onclick = function () {
    const ans91 = document.getElementById("q91").value.trim().toLowerCase()
    const newans91 = ans91.replace(/\s/g, '')
    const ans92 = document.getElementById("q92").value.trim().toLowerCase()
    const newans92 = ans92.replace(/\s/g, '')
    const ans93 = document.getElementById("q93").value.trim().toLowerCase()
    const newans93 = ans93.replace(/\s/g, '')

    if (newans91 === q91a) {
        correct += 1
        document.getElementById("q91").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q91").style.backgroundColor = "red"
    }
    if (newans92 === q92a) {
        correct += 1
        document.getElementById("q92").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q92").style.backgroundColor = "red"
    }
    if (q93a.includes(newans93)) {
        correct += 1
        document.getElementById("q93").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q93").style.backgroundColor = "red"
    }
    document.getElementById("q91").disabled = true
    document.getElementById("q92").disabled = true
    document.getElementById("q93").disabled = true
    document.getElementById("submit31").disabled = true
    document.getElementById("submit32").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit32").onclick = function () {
    const ans94 = document.getElementById("q94").value.trim().toLowerCase()
    const newans94 = ans94.replace(/\s/g, '')
    const ans95 = document.getElementById("q95").value.trim().toLowerCase()
    const newans95 = ans95.replace(/\s/g, '')
    const ans96 = document.getElementById("q96").value.trim().toLowerCase()
    const newans96 = ans96.replace(/\s/g, '')

    if (newans94 === q94a) {
        correct += 1
        document.getElementById("q94").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q94").style.backgroundColor = "red"
    }
    if (q95a === newans95) {
        correct += 1
        document.getElementById("q95").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q95").style.backgroundColor = "red"
    }
    if (q96a.includes(newans96)) {
        correct += 1
        document.getElementById("q96").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q96").style.backgroundColor = "red"
    }
    document.getElementById("q94").disabled = true
    document.getElementById("q95").disabled = true
    document.getElementById("q96").disabled = true
    document.getElementById("submit32").disabled = true
    document.getElementById("submit33").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit33").onclick = function () {
    const ans97 = document.getElementById("q97").value.trim().toLowerCase()
    const newans97 = ans97.replace(/\s/g, '')
    const ans98 = document.getElementById("q98").value.trim().toLowerCase()
    const newans98 = ans98.replace(/\s/g, '')
    const ans99 = document.getElementById("q99").value.trim().toLowerCase()
    const newans99 = ans99.replace(/\s/g, '')

    if (newans97 === q97a) {
        correct += 1
        document.getElementById("q97").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q97").style.backgroundColor = "red"
    }
    if (newans98 === q98a) {
        correct += 1
        document.getElementById("q98").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q98").style.backgroundColor = "red"
    }
    if (q99a.includes(newans99)) {
        correct += 1
        document.getElementById("q99").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q99").style.backgroundColor = "red"
    }
    document.getElementById("q97").disabled = true
    document.getElementById("q98").disabled = true
    document.getElementById("q99").disabled = true
    document.getElementById("submit33").disabled = true
    document.getElementById("submit34").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit34").onclick = function () {
    const ans100 = document.getElementById("q100").value.trim().toLowerCase()
    const newans100 = ans100.replace(/\s/g, '')
    const ans101 = document.getElementById("q101").value.trim().toLowerCase()
    const ans102 = document.getElementById("q102").value.trim().toLowerCase()
    const newans102 = ans102.replace(/\s/g, '')

    if (newans100 === q100a) {
        correct += 1
        document.getElementById("q100").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q100").style.backgroundColor = "red"
    }
    if (q101a === ans101) {
        correct += 1
        document.getElementById("q101").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q101").style.backgroundColor = "red"
    }
    if (q102a.includes(newans102)) {
        correct += 1
        document.getElementById("q102").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q102").style.backgroundColor = "red"
    }
    document.getElementById("q100").disabled = true
    document.getElementById("q101").disabled = true
    document.getElementById("q102").disabled = true
    document.getElementById("submit34").disabled = true
    document.getElementById("submit35").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit35").onclick = function () {
    const ans103 = document.getElementById("q103").value.trim().toLowerCase()
    const newans103 = ans103.replace(/\s/g, '')
    const ans104 = document.getElementById("q104").value.trim().toLowerCase()
    const ans105 = document.getElementById("q105").value.trim().toLowerCase()
    const newans105 = ans105.replace(/\s/g, '')

    if (newans103 === q103a) {
        correct += 1
        document.getElementById("q103").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q103").style.backgroundColor = "red"
    }
    if (q104a === ans104) {
        correct += 1
        document.getElementById("q104").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q104").style.backgroundColor = "red"
    }
    if (q105a.includes(newans105)) {
        correct += 1
        document.getElementById("q105").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q105").style.backgroundColor = "red"
    }
    document.getElementById("q103").disabled = true
    document.getElementById("q104").disabled = true
    document.getElementById("q105").disabled = true
    document.getElementById("submit35").disabled = true
    document.getElementById("submit36").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit36").onclick = function () {
    const ans106 = document.getElementById("q106").value.trim().toLowerCase()
    const newans106 = ans106.replace(/\s/g, '')
    const ans107 = document.getElementById("q107").value.trim().toLowerCase()
    const newans107 = ans107.replace(/\s/g, '')
    const ans108 = document.getElementById("q108").value.trim().toLowerCase()
    const newans108 = ans108.replace(/\s/g, '')

    if (newans106 === q106a) {
        correct += 1
        document.getElementById("q106").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q106").style.backgroundColor = "red"
    }
    if (q107a.includes(newans107)) {
        correct += 1
        document.getElementById("q107").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q107").style.backgroundColor = "red"
    }
    if (q108a.includes(newans108)) {
        correct += 1
        document.getElementById("q108").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q108").style.backgroundColor = "red"
    }
    document.getElementById("q106").disabled = true
    document.getElementById("q107").disabled = true
    document.getElementById("q108").disabled = true
    document.getElementById("submit36").disabled = true
    document.getElementById("score").textContent = 'Score: ' + correct;
};
