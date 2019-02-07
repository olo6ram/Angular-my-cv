
import{Social} from './social.interface';
import{changeLog} from './changeLog.interface';
import{updates} from './updates.interface';
export interface Portfolio{
    nom:string;
    prenom:string;
    subheading:string;
    socialMedia:Social[];
    introducction:string;
    changeLog:changeLog[];
    updates:updates[];
    myBio:string;
}