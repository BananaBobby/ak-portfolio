import React from 'react';
import data from '../data.json';

export default function Home() {
  const { rubrics } = data;

  return (
    <div className="layout" data-component="TimedMenu,Gallery,About">
      <div className="layout__holder">
        <div className="layout__side">
          <div className="layout__promo">
            <h1 className="layout__title js-content-slider__reset js-timed-menu__close">
              Anastasia Belyaeva
            </h1>

            <div className="menu layout__menu">
              {
                rubrics.map(rubric => (
                  <a href="#" className="menu__item js-timed-menu__item" key={rubric.name}>
                    { rubric.name }
                    <div className="menu__progress">
                      <div className="menu__bar js-timed-menu__progress" />
                    </div>
                  </a>
                ))
              }
            </div>

            <div className="layout__preview-box">
              <div className="layout__previews">
                {
                  rubrics.map(rubric => (
                    <div className="layout__previews-section js-timed-menu__section" key={rubric.name}>
                      {
                        rubric.previews.map(post => (
                          <a key={post.title} className="layout__preview preview js-gallery__preview" href="#" data-post={JSON.stringify(post)}>
                            { post.soon && <div className="preview__badge">Coming soon</div> }
                            <div
                              className="preview__img"
                              style={{ backgroundImage: `url(${post.previewSmall})` }}
                            >
                              <div className="preview__action">
                                <i className="material-icons">
                                  {
                                    post.media && post.media[0].includes('vimeo.com')
                                      ? 'play_arrow'
                                      : 'search'
                                  }
                                </i>
                              </div>
                            </div>
                          </a>
                        ))
                      }
                    </div>
                  ))
                }
              </div>

              <div className="layout__more">
                <a className="link js-timed-menu__more" href="#">
                  More
                </a>
              </div>
            </div>
          </div>

          <div className="layout__about">
            <p>
              “Each moment you are in a certain state. There is no such moment when you aren’t. Draw your attention to the state that you experience at the moment. Or mood. Or sensation. Or emotion. Can you associate your current self with a specific emotion/sensation/state of mind. Observe it. Now find a way how you can move keeping your attention there, don’t think of a movement, do not design it in your head, don’t think of a next step. The only thing that you need to be busy with is constant observation of your state/sensation/emotion. With time it might change and shift to another one, which is okay. Just continue to observe what’s new going on. Look inwards”
            </p>
            <p>
              Drawing attention to an instrument itself and by practicing concentration we reach our emotions directly. Awareness allows space for intuitive control. This space offers a huge playground for creativity and also for zeroing out, self purification. This is a huge resource for me.
            </p>
            <div className="layout__back js-about__close">
              <i className="layout__back-icon material-icons">
                arrow_back
              </i>
              Back
            </div>
          </div>
        </div>

        <div className="layout__content">
          <div className="layout__controls">
            <a className="layout__control js-content-slider__control-prev js-timed-menu__slider-prev" href="#">
              <i className="layout__control-icon material-icons">
                arrow_upward
              </i>
            </a>
            <a className="layout__control js-content-slider__control-next js-timed-menu__slider-next" href="#">
              <i className="layout__control-icon material-icons">
                arrow_downward
              </i>
            </a>
          </div>

          <div className="layout__wrapper">
            <div className="layout__img" />
            <div className="layout__changer" />
            <div className="layout__changer layout__changer_secondary" />
            <div className="layout__changer layout__changer_tertiary">
              <div className="layout__inner">
                {
                  rubrics.map(rubric => (
                    <div key={rubric.name} className="layout__content-type js-timed-menu__content-type js-content-slider">
                      <div className="content-slider js-content-slider__scroll">
                        <div className="content-slider__back js-timed-menu__close">
                          <i className="content-slider__back-icon material-icons">
                            arrow_back
                          </i>
                          Back
                        </div>

                        {
                          rubric.slides.map(slide => (
                            <div className={`content-slider__slide content-slider__slide_${slide.type} js-content-slider__item`}>
                              <div className="content-slider__wrapper">
                                {
                                  slide.posts.map(post => (
                                    <div className="content-slider__item js-gallery__preview" data-post={JSON.stringify(post)} key={post.title}>
                                      <div className="content-slider__holder">
                                        <div className="content-slider__inner" style={{ backgroundImage: `url(${post.preview})` }}>
                                          <div className="content-slider__action">
                                            <i className="material-icons">
                                              {
                                                post.media && post.media[0].includes('vimeo.com')
                                                  ? 'play_arrow'
                                                  : 'search'
                                              }
                                            </i>
                                          </div>

                                          <div className="content-slider__info">
                                            { post.soon && <div className="content-slider__badge">Coming soon }</div> }
                                            <div className="content-slider__title">
                                              { post.title }
                                            </div>
                                            <div className="content-slider__description">
                                              { post.description }
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))
                                }
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>

        <div className="layout__copy">
          © 2021 Anastasia Belyaeva
        </div>

        <div className="layout__shares">
          <a className="layout__share" href="https://www.instagram.com/stacie_koch/" target="_blank">
            Instagram
          </a>
          <a className="layout__share" href="https://www.facebook.com/blv.anastasia" target="_blank">
            Facebook
          </a>
          <a className="layout__share" href="mailto:blvt.anastasia@gmail.com" target="_blank">
            Email
          </a>
          <a className="layout__share js-about__open" href="#" target="_blank">
            About
          </a>
        </div>

        <div className="viewer js-gallery__viewer">
          <div className="viewer__overlay js-gallery__close" />

          <button className="viewer__close js-gallery__close">
            <i className="viewer__close-icon material-icons">
              close
            </i>
          </button>

          <div className="viewer__inner">
            <div className="viewer__action js-gallery__action">
              <div className="viewer__action-button js-gallery__action-button">
                <i className="material-icons">
                  subject
                </i>

                <span className="viewer__action-button-text">
                  Read more
                </span>
              </div>

              <div className="viewer__action-container js-gallery__info" />
            </div>

            <div className="viewer__control viewer__control_prev material-icons js-gallery__prev">
              arrow_back
            </div>
            <div className="viewer__control viewer__control_next material-icons js-gallery__next">
              arrow_forward
            </div>

            <div className="viewer__media">
              <div className="viewer__container js-gallery__media" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
