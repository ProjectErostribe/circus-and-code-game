import React from "react";
import img from "../img/rooms/Hall-option-1.jpg";
import { useParams, Link } from "react-router-dom";
import useSound from "use-sound";
import { doorCreak } from "../sounds";
import PresentKey from "./PresentKey";
import PageNumber from "./PageNumber";
import { midway } from './storyData'

const Midway = (props) => {
	const [playDoorCreak, doorCreakSoundData] = useSound(doorCreak, {
		soundEnabled: props.audioOn,
		volume: 0.1,
		interrupt: true,
	});
	let { page } = useParams();
	page = parseInt(page || 0);

	// stop doorCreak sound when speaker button is toggled off
	if (!props.audioOn) {
		doorCreakSoundData.stop();
	}

	return (
		<div id="midway">
			<h1>Midway</h1>
			<div className="img-wrap">
				<img className="midway" src={img} alt="" />
			</div>

			{midway[page].map((paragraph, index) => (
            	<p key={index}>{paragraph}</p>
          	)
        )}
			
			<div id="button-bar">
        {page !== (midway.length - 1) && (
			<div className="btn-wrap">
				<Link to={`/hallwayreroute`}>
					<button> Skip to Gameplay </button>
				</Link>
			</div>
        )}
				{page !== (midway.length - 1) ? (
					<Link to={`/midway/${page + 1}`}>
						<button id="btn">Continue Story</button>
					</Link>
				) : (
					props.rooms.map((room, index) => (
						<Link
							to={{
								pathname: `/room/${room.name}`,		
								}}
							key={index}
						>
							<button id="btn" onClick={() => playDoorCreak()}>
								{room.name}
							</button>
						</Link>
					))
				)}
			</div>
			{page === (midway.length - 1) && (props.hasGoldKey || props.hasSilverKey) && (
				<PresentKey
					hasGoldKey={props.hasGoldKey}
					hasSilverKey={props.hasSilverKey}
					setHasGoldKey={props.setHasGoldKey}
					setHasSilverKey={props.setHasSilverKey}
					audioOn={props.audioOn}
				/>
			)}
			<PageNumber pages={midway} page={page} title="Midway" />
		</div>
	);
};

export default Midway;