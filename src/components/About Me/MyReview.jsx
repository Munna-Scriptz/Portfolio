import React, { useEffect, useRef } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import reviewImg1 from '../../assets/images/reviewimg1.png'
const MyReview = () => {
  const outerRef = useRef(null);
  const cardsRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const outer = outerRef.current;
    const cards = cardsRef.current;
    if (!outer || !cards) return;

    const cardElems = Array.from(cards.querySelectorAll(".card"));
    if (!cardElems.length) return;

    const GAP = 30; // keep in sync with CSS gap
    let count = cardElems.length;
    let cardWidth = cardElems[0].clientWidth;
    let cardHeight = cardElems[0].clientHeight;

    function computeLayout() {
      cardWidth = cardElems[0].clientWidth;
      cardHeight = cardElems[0].clientHeight;
      const totalWidth = count * cardWidth + (count - 1) * GAP;
      const viewportW = window.innerWidth;
      const maxTranslate = Math.max(0, totalWidth - viewportW);
      // vertical scroll area needed to map to full horizontal translate:
      const scrollAreaHeight = maxTranslate + window.innerHeight;

      // CSS vars for positioning & centering
      outer.style.setProperty("--cards-count", String(count));
      cards.style.setProperty("--card-width", `${cardWidth}px`);
      cards.style.setProperty("--card-height", `${cardHeight}px`);
      cards.style.width = `${totalWidth}px`;
      outer.style.height = `${scrollAreaHeight}px`;

      // stacked offset inside each card (visual offset like stacked cards)
      cardElems.forEach((card, index) => {
        const offsetLeft = 20 + index * 20; // tweak to taste
        card.style.paddingLeft = `${offsetLeft}px`;
      });

      return { totalWidth, viewportW, maxTranslate, scrollAreaHeight };
    }

    let layout = computeLayout();

    function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

    function update() {
      const outerRect = outer.getBoundingClientRect();
      const outerTopOnPage = window.scrollY + outerRect.top;
      const maxScroll = layout.scrollAreaHeight - window.innerHeight;
      const scrolled = clamp(window.scrollY - outerTopOnPage, 0, maxScroll || 0);
      const progress = maxScroll > 0 ? scrolled / maxScroll : 0;
      const translateX = -progress * layout.maxTranslate;

      // move the whole row horizontally
      cards.style.transform = `translateX(${translateX}px)`;

      // visual focus: scale + brightness based on distance to center
      const centerX = window.innerWidth / 2;
      const MIN_SCALE = 0.85; // smallest scale for far cards (tweak)
      const MIN_BRIGHTNESS = 0.6;

      cardElems.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const dist = Math.abs(cardCenter - centerX);
        const norm = clamp(dist / window.innerWidth, 0, 1); // 0 -> center, 1 -> edge

        const scale = 1 - norm * (1 - MIN_SCALE);
        const brightness = 1 - norm * (1 - MIN_BRIGHTNESS);

        const inner = card.querySelector(".card__inner");
        if (inner) {
          inner.style.transform = `scale(${scale})`;
          inner.style.filter = `brightness(${brightness})`;
        }
      });
    }

    function onScroll() {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    }

    function onResize() {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      layout = computeLayout();
      rafRef.current = requestAnimationFrame(update);
    }

    // initial paint
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
    <div id="ScrollCardsHorizontal">
      <div ref={outerRef} className="cards-outer">
        <div ref={cardsRef} className="cards">

          <div className="card" data-index="0">
            <div className="card__inner">
              <div className="card__content">
                {/* ----------Quote And stars---------- */}
                <div className="flex items-center justify-between mb-10">
                  <div id='Quote' className='bg-Primary border-1 border-borderCol w-[52px] h-[52px] rounded-[6px] text-white flex items-center justify-center text-2xl'>
                    <FaQuoteLeft />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-brand font-poppins font-medium">Reviews</p>
                    <div className="flex items-center gap-1 text-[#FBBF24]">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                
                </div>
                {/* ----------Main Text---------- */}
                <p className="card__description">
                  A natural problem-solver. “Munna consistently delivered clean, scalable code and brought fresh ideas to the table. His ability to break down complex problems made him an invaluable part of our development team.”
                </p>
                {/* ----------User Reviewer---------- */}
                <div className="mt-10 flex items-center gap-4">
                  <div className="w-[50px] h-[50px] rounded-full"><img className="rounded-full" src={reviewImg1} alt="review profile" /></div>
                  <div>
                    <h2 className="text-brand font-poppins font-semibold text-md">John Smith</h2>
                    <p className="text-[#e5e3dc9d] font-poppins font-semibold text-sm mt-1">Agency Client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card" data-index="1">
            <div className="card__inner">
              <div className="card__image-container" />
              <div className="card__content">
                <h1 className="card__title font-soldier text-second text-5xl flex items-center justify-between uppercase">
                  Api integration <span className="text-second">02</span>
                </h1>
                <p className="card__description">
                  I integrate powerful APIs to connect frontend apps with real-time data and dynamic features. Whether it's fetching content, handling user inputs, or syncing services, I ensure seamless communication between the client and backend.
                </p>
              </div>
            </div>
          </div>

          <div className="card" data-index="2">
            <div className="card__inner">
              <div className="card__image-container" />
              <div className="card__content">
                <h1 className="card__title font-soldier text-second text-5xl flex items-center justify-between uppercase">
                  figma to responsive website <span className="text-second">03</span>
                </h1>
                <p className="card__description">
                  I convert Figma designs into fully responsive and functional websites with clean code and pixel-perfect accuracy. Every section is optimized for speed, usability, and smooth performance across all screen sizes.
                </p>
              </div>
            </div>
          </div>

          <div className="card" data-index="3">
            <div className="card__inner">
              <div className="card__image-container" />
              <div className="card__content">
                <h1 className="card__title font-soldier text-second text-5xl flex items-center justify-between uppercase">
                  Web management <span className="text-second">04</span>
                </h1>
                <p className="card__description">
                  I convert Figma designs into fully responsive and functional websites with clean code and pixel-perfect accuracy. Every section is optimized for speed, usability, and smooth performance across all screen sizes.
                </p>
              </div>
            </div>
          </div>
          <div className="card" data-index="4">
            <div className="card__inner">
              <div className="card__image-container" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MyReview