import { Activity } from "lucide-react";


function LiveOPDQueue () {
    return (
        <div className="live-opd-section">
            <div className="live-opd-heading">
                <Activity className="live-opd-icon" />
                <h2>Live OPD Queue</h2>
            </div>
            <p>Check current OPD availability and queue updates.</p>

            <span className="live-opd-status">
                Queue information coming soon.
            </span>
        </div>
      
    );
}

export default LiveOPDQueue;