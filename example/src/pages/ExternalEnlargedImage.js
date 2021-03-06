import React, { Component } from 'react';
import ReactSlick from '../components/ReactSlick';
import SpacedSpan from '../components/SpacedSpan';

import './app.css';
import './react-slick.css';

export default class ReactSlickExample extends Component {
    render() {
        return (
            <div className="fluid react-slick">
                <div className="fluid__image-container">
                    <ReactSlick {...{
                        rimProps: {
                            isHintEnabled: true,
                            shouldHideHintAfterFirstActivation: false,
                            enlargedImagePortalId: 'portal',
                            enlargedImageContainerDimensions: {
                                width: '150%',
                                height: '100%'
                            },
                            lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                        }
                    }}/>
                </div>
                <div className="fluid__instructions" style={{position: 'relative'}}>
                    <div
                        id="portal"
                        className="portal"
                    />
                    <h3>External Enlarged Image Example</h3>
                    <p>
                        Render enlarged image into an HTML element of your choosing.
                    </p>
                    <p>
                        Ignored for touch input by default but will be honored if
                        isEnlargedImagePortalEnabledForTouch is implemented.
                    </p>
                    <p>
                        Use cases include a scenario where an ancestor element of
                        react-image-magnify implements overflow hidden.
                    </p>
                    <p>
                        Requires React v16.
                    </p>
                    <p>
                        Please see
                        <SpacedSpan>
                            <a href="https://github.com/ethanselzer/react-image-magnify/blob/master/example/src/pages/ExternalEnlargedImage.js">
                                example source code
                            </a>
                        </SpacedSpan>
                        for details.
                    </p>
                </div>
                <div style={{height: '1000px'}} />
            </div>
        );
    }
}
