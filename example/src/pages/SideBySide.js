import React, { Component } from 'react';
import ReactImageMagnify from '../pkg-lnk/ReactImageMagnify';
import SpacedSpan from '../components/SpacedSpan';

import './app.css';

import watchImg355 from '../images/wristwatch_355.jpg';
import watchImg481 from '../images/wristwatch_481.jpg';
import watchImg584 from '../images/wristwatch_584.jpg';
import watchImg687 from '../images/wristwatch_687.jpg';
import watchImg770 from '../images/wristwatch_770.jpg';
import watchImg861 from '../images/wristwatch_861.jpg';
import watchImg955 from '../images/wristwatch_955.jpg';
import watchImg1033 from '../images/wristwatch_1033.jpg';
import watchImg1112 from '../images/wristwatch_1112.jpg';
import watchImg1192 from '../images/wristwatch_1192.jpg';
import watchImg1200 from '../images/wristwatch_1200.jpg';

export default class BasicExample extends Component {
    get srcSet() {
        return [
            `${watchImg355} 355w`,
            `${watchImg481} 481w`,
            `${watchImg584} 584w`,
            `${watchImg687} 687w`,
            `${watchImg770} 770w`,
            `${watchImg861} 861w`,
            `${watchImg955} 955w`,
            `${watchImg1033} 1033w`,
            `${watchImg1112} 1112w`,
            `${watchImg1192} 1192w`,
            `${watchImg1200} 1200w`,
        ].join(', ');
    }

    render() {
        return (
            <div className="fluid">
                <div className="fluid__image-container">
                    <ReactImageMagnify {...{
                        largeImage: {
                            alt: '',
                            src: watchImg1200,
                            width: 1200,
                            height: 1800
                        },
                        smallImage: {
                            isFluidWidth: true,
                            alt: 'Wristwatch by Ted Baker London',
                            src: watchImg1200,
                            srcSet: this.srcSet,
                            sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                        },
                        isHintEnabled: true
                    }} />
                </div>
                <div className="fluid__instructions">
                    <h3>Basic Example</h3>
                    <p>
                        Side by Side enlargement for mouse input.
                    </p>
                    <p>
                        In place enlargement for touch input.
                    </p>
                    <p>
                        Fluid between breakpoints.
                    </p>
                    <p>
                        Initial file size optimized via
                        <SpacedSpan className="code">
                            srcSet
                        </SpacedSpan>
                        and
                        <SpacedSpan className="code">
                            sizes
                        </SpacedSpan>
                        attributes.
                    </p>
                    <p>
                        Please see
                        <SpacedSpan>
                            <a href="https://github.com/ethanselzer/react-image-magnify/blob/master/example/src/pages/SideBySide.js">
                                source code
                            </a>
                        </SpacedSpan>
                        for details.
                    </p>
                </div>
                <div style={{height: '500px'}} />
            </div>
        );
    }
}
