import * as React from 'react';
import * as Radium from 'radium';
import Anime, {AnimeProps} from 'react-anime';

@Radium
export class TestMainPage extends React.Component<{}, {}> {
    render(): JSX.Element {
        return (
            <div style={mainPageStyle}>
                <Anime {...logoAnimationOptions}>
                    <h3>My App</h3>
                    <code>react-mobile-starter</code>
                </Anime>
            </div>
        );
    }
}

const logoAnimationOptions: AnimeProps = {
    marginTop: ['-100px', '100px'],
    duration: 2000,
    easing: 'easeOutElastic',
    elasticity: 400
};

const mainPageStyle: React.CSSProperties = {
    backgroundColor: '#fafafa',
    padding: '25px 15px',
    textAlign: 'center',
    fontSize: '22px'
};
