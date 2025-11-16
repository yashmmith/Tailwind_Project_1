const navdialog = document.getElementById('nav_dialog');
function handleMenu() {
    navdialog.classList.toggle('hidden');
}

const initialLtr = -48 * 4;
const initialRtl = 5 * 4;

function setupintersectionobserver(element, isLtr, speed) {
    const intersectioncallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        console.log(element, isIntersecting);
        if (isIntersecting) {
            document.addEventListener('scroll', scrollhandler);
            element.classList.add('visible');
        } else {
            document.removeEventListener('scroll', scrollhandler);
        }
    };
    const intersectionobserver = new IntersectionObserver(intersectioncallback);
    intersectionobserver.observe(element);
    function scrollhandler() {
        const translatex = (window.innerHeight - element.getBoundingClientRect().top) * speed;
        let trs = 0;
        if (isLtr) {
            trs = translatex + initialLtr;
        } else {
            trs = translatex + initialRtl;
        }
        element.style.transform = `translateX(${trs}px)`;
    }
}
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line4");

setupintersectionobserver(line1, true, 0.15);
setupintersectionobserver(line2, false, 0.15);
setupintersectionobserver(line3, true, 0.15);
setupintersectionobserver(line4, true, 0.6);