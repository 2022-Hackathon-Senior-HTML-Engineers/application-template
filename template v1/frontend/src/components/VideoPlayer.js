import { Player } from 'video-react';

export default props => {
    return (
        <Player>
            <source src="https://www.youtube.com/watch?v=0Fcdln0HjBA&ab_channel=DavidWelch" />
            <link
                rel="stylesheet"
                href="https://video-react.github.io/assets/video-react.css"
            />
        </Player>
    );
};


