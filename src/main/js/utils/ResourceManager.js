import Speedlog from "Resources/others/speedlog.svg";
import AIS from "Resources/others/ais.svg";
import Echosounder from "Resources/others/echosounder.svg";
import Meteo from "Resources/others/meteo.svg";
import GPS from "Resources/others/gps.svg";
import VRS from "Resources/others/vrs.svg";
import Gyrocompass from "Resources/others/gyrocompass.svg";
import MyLocationIcon from "Resources/others/gps.svg";
import NavyPitch from "Resources/vessels/ship-svgrepo-com_pitch.svg";
import NavyRoll from "Resources/vessels/ship-svgrepo-com_roll.svg";
import CotecmarLogo from "Resources/others/CotecmarLogo.svg";
import NavyModel from "Resources/others/navy.stl";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const resourceMap = Object.freeze({
  speedlog: Speedlog,
  ais: AIS,
  echo: Echosounder,
  meteo: Meteo,
  gps: GPS,
  vrs: VRS,
  gyrocompass: Gyrocompass,
  location: MyLocationIcon,
  navyPitch: NavyPitch,
  navyRoll: NavyRoll,
  enterpriseLogo: CotecmarLogo,
  navymodel: NavyModel,
});

export default {
  /**
   * method that returns an icon resource from Resources folder, if doesnt exists, return a WarningAmberIcon
   * @param {String} key
   * @returns
   */
  getIconResource: (key) => {
    const resource = resourceMap[key];
    if (resource) {
      return resource;
    } else {
      return WarningAmberIcon;
    }
  },
};
