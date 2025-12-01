export interface Child {
  id: string;
  name: string;
  group: string;
  status: 'present' | 'home';
  checkInTime?: string;
  checkOutTime?: string;
  pickupStatus?: 'pending' | 'approved' | null;
  pickupPerson?: string;
}

export interface ApprovedPerson {
  id: string;
  childId: string;
  name: string;
  relation: string;
  phone: string;
  status: 'approved' | 'pending';
  approvedDate?: string;
  blocked?: boolean; // NEW: For foreldre-kontroll
}

// NEW: Hendelsesrapporter (ulykker/info)
export interface Incident {
  id: string;
  childId: string;
  type: 'injury' | 'illness' | 'info' | 'emergency';
  title: string;
  description: string;
  reportedBy: string;
  reportedAt: string;
  severity: 'low' | 'medium' | 'high';
  actionTaken?: string;
  notifiedParents: boolean;
}

// NEW: Hentingslogg (for foreldre-kontroll)
export interface PickupLog {
  id: string;
  childId: string;
  pickedUpBy: string;
  pickedUpAt: string;
  checkedOutTime: string;
  verifiedBy: string; // Staff member who verified
}

// NEW: Daglig info (matmeny, dagsplan)
export interface DailyInfo {
  id: string;
  date: string;
  type: 'menu' | 'activity' | 'announcement';
  title: string;
  description: string;
  targetGroup?: string;
}

export const mockChildren: Child[] = [
  {
    id: 'child-1',
    name: 'Emma Hansen',
    group: 'Blåklokka',
    status: 'present',
    checkInTime: '08:24',
    pickupStatus: null,
  },
  {
    id: 'child-2',
    name: 'Lucas Berg',
    group: 'Blåklokka',
    status: 'present',
    checkInTime: '08:15',
    pickupStatus: null,
  },
  {
    id: 'child-3',
    name: 'Olivia Andersen',
    group: 'Solstråla',
    status: 'home',
    pickupStatus: null,
  },
  {
    id: 'child-4',
    name: 'Noah Nilsen',
    group: 'Blåklokka',
    status: 'present',
    checkInTime: '07:45',
    pickupStatus: null,
  },
  {
    id: 'child-5',
    name: 'Sofia Larsen',
    group: 'Solstråla',
    status: 'present',
    checkInTime: '08:30',
    pickupStatus: 'pending',
    pickupPerson: 'Bestemor',
  },
  {
    id: 'child-6',
    name: 'William Olsen',
    group: 'Blåklokka',
    status: 'home',
    pickupStatus: null,
  },
  {
    id: 'child-7',
    name: 'Maja Johansen',
    group: 'Solstråla',
    status: 'present',
    checkInTime: '08:00',
    pickupStatus: 'approved',
    pickupPerson: 'Mamma',
  },
  {
    id: 'child-8',
    name: 'Filip Pedersen',
    group: 'Blåklokka',
    status: 'present',
    checkInTime: '07:50',
    pickupStatus: null,
  },
  {
    id: 'child-9',
    name: 'Ella Kristiansen',
    group: 'Solstråla',
    status: 'home',
    pickupStatus: null,
  },
  {
    id: 'child-10',
    name: 'Oskar Jensen',
    group: 'Blåklokka',
    status: 'present',
    checkInTime: '08:20',
    pickupStatus: null,
  },
  {
    id: 'child-11',
    name: 'Lea Hansen',
    group: 'Solstråla',
    status: 'present',
    checkInTime: '08:10',
    pickupStatus: null,
  },
  {
    id: 'child-12',
    name: 'Oliver Berg',
    group: 'Blåklokka',
    status: 'home',
    pickupStatus: null,
  },
  {
    id: 'child-13',
    name: 'Nora Andersen',
    group: 'Solstråla',
    status: 'present',
    checkInTime: '07:55',
    pickupStatus: null,
  },
  {
    id: 'child-14',
    name: 'Jakob Nilsen',
    group: 'Blåklokka',
    status: 'present',
    checkInTime: '08:05',
    pickupStatus: null,
  },
  {
    id: 'child-15',
    name: 'Ingrid Larsen',
    group: 'Solstråla',
    status: 'present',
    checkInTime: '08:25',
    pickupStatus: null,
  },
  {
    id: 'child-16',
    name: 'Magnus Olsen',
    group: 'Blåklokka',
    status: 'home',
    pickupStatus: null,
  },
];

export const mockApprovedPersons: ApprovedPerson[] = [
  {
    id: 'person-1',
    childId: 'child-1',
    name: 'Kari Nordmann',
    relation: 'Mor',
    phone: '+47 123 45 678',
    status: 'approved',
    approvedDate: '2025-11-27',
    blocked: false,
  },
  {
    id: 'person-2',
    childId: 'child-1',
    name: 'Ola Nordmann',
    relation: 'Far',
    phone: '+47 987 65 432',
    status: 'approved',
    approvedDate: '2025-11-27',
    blocked: false,
  },
  {
    id: 'person-3',
    childId: 'child-1',
    name: 'Mormor Anne',
    relation: 'Besteforelder',
    phone: '+47 555 12 345',
    status: 'approved',
    approvedDate: '2025-11-20',
    blocked: false,
  },
  {
    id: 'person-4',
    childId: 'child-1',
    name: 'Tante Lisa',
    relation: 'Tante',
    phone: '+47 444 55 666',
    status: 'approved',
    approvedDate: '2025-11-15',
    blocked: false,
  },
  {
    id: 'person-5',
    childId: 'child-1',
    name: 'Stine Henting',
    relation: 'Annen',
    phone: '+47 333 22 111',
    status: 'pending',
    blocked: false,
  },
];

// NEW: Mock hendelser
export const mockIncidents: Incident[] = [
  {
    id: 'incident-1',
    childId: 'child-1',
    type: 'injury',
    title: 'Mindre fall på lekeplassen',
    description: 'Emma falt og skrapte kneet sitt mens hun lekte på klatreutstyret. Såret ble rengjort og plaster ble påført.',
    reportedBy: 'Pedagog Anna Berg',
    reportedAt: '2025-11-29T10:15:00',
    severity: 'low',
    actionTaken: 'Rengjort sår, påført plaster, observert i 30 min',
    notifiedParents: true,
  },
  {
    id: 'incident-2',
    childId: 'child-1',
    type: 'info',
    title: 'Glemt matboks',
    description: 'Emma hadde glemt matboksen sin hjemme. Hun fikk mat fra barnehagen.',
    reportedBy: 'Pedagog Maria Lund',
    reportedAt: '2025-11-28T11:30:00',
    severity: 'low',
    notifiedParents: true,
  },
  {
    id: 'incident-3',
    childId: 'child-2',
    type: 'illness',
    title: 'Kvalm etter lunsj',
    description: 'Lucas følte seg kvalm etter lunsj og la seg ned. Temperatur: 37.2°C. Foreldre varslet.',
    reportedBy: 'Pedagog Anna Berg',
    reportedAt: '2025-11-27T13:00:00',
    severity: 'medium',
    actionTaken: 'Hvile i grupperom, temperatur målt, foreldre kontaktet',
    notifiedParents: true,
  },
];

// NEW: Mock hentingslogg
export const mockPickupLogs: PickupLog[] = [
  {
    id: 'log-1',
    childId: 'child-1',
    pickedUpBy: 'Kari Nordmann',
    pickedUpAt: '2025-11-28T15:30:00',
    checkedOutTime: '15:30',
    verifiedBy: 'Pedagog Anna Berg',
  },
  {
    id: 'log-2',
    childId: 'child-1',
    pickedUpBy: 'Ola Nordmann',
    pickedUpAt: '2025-11-27T16:15:00',
    checkedOutTime: '16:15',
    verifiedBy: 'Pedagog Maria Lund',
  },
  {
    id: 'log-3',
    childId: 'child-1',
    pickedUpBy: 'Mormor Anne',
    pickedUpAt: '2025-11-26T14:45:00',
    checkedOutTime: '14:45',
    verifiedBy: 'Pedagog Anna Berg',
  },
];

// NEW: Mock daglig info
export const mockDailyInfo: DailyInfo[] = [
  {
    id: 'info-1',
    date: '2025-12-01',
    type: 'menu',
    title: 'Lunsj i dag',
    description: 'Fiskesuppe med grovbrød og smør. Dessert: Frukt og yoghurt.',
  },
  {
    id: 'info-2',
    date: '2025-12-01',
    type: 'activity',
    title: 'Utetur til skogen',
    description: 'I dag skal vi på tur til skogen klokken 10:00. Husk ekstra klær og godt fottøy!',
    targetGroup: 'Blåklokka',
  },
  {
    id: 'info-3',
    date: '2025-12-01',
    type: 'announcement',
    title: 'Adventsstund',
    description: 'På fredag skal vi ha adventsstund med kakao og pepperkaker. Velkommen!',
  },
  {
    id: 'info-4',
    date: '2025-12-02',
    type: 'menu',
    title: 'Lunsj i morgen',
    description: 'Pasta Bolognese med salat. Dessert: Eplekake.',
  },
];