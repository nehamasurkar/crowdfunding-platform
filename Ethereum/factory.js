import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x00C391369E65f762c1beBC591a657dCC16404c4E'
);

export default instance;