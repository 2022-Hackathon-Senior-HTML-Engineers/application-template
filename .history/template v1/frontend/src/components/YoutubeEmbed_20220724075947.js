import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
        <iframe
            width="853"
            height="480"
            src={`https://auckland.au.panopto.com/Panopto/Pages/Embed.aspx?id=b02784f7-f51f-426b-95eb-aed700330751${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </div>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;