export interface Event {
    id: number;
    title: string;
    description: string;
    date: string;
    category: string;
    image: string; 
    slug :string;
  }

  export type FilterChangeHandler = (category: string) => void;

  
  const eventsData: Event[] = [
    {
        id: 1,
        title: 'Yazılım Konferansı',
        description: 'Geleceğin teknolojileri üzerine konuşmacıların yer aldığı bir konferans.',
        date: '2024-08-15',
        category: 'Konferans',
        image: '/images/event1.jpg',
        slug: 'yazilim-gecesi',

      },
      {
        id: 2,
        title: 'Rock Festivali',
        description: 'Ünlü rock gruplarının sahne alacağı enerjik bir festival.',
        date: '2024-09-22',
        category: 'Festival',
        image: '/images/event2.jpg',
        slug: 'rock-gecesi',

      },
      {
        id: 3,
        title: 'Modern Sanat Sergisi',
        description: 'Çağdaş sanatçıların eserlerinin sergilendiği bir sergi.',
        date: '2024-10-05',
        category: 'Sergi',
        image: '/images/event3.jpg',
        slug: 'sanat-sergisi', 

      },
      {
        id: 4,
        title: 'Kariyer Fuarı',
        description: 'Farklı sektörlerden şirketlerin katıldığı bir kariyer fuarı.',
        date: '2024-11-10',
        category: 'Kariyer',
        image: '/images/event4.jpg',
        slug: 'kariyer-günü', 

      },
      {
        id: 5,
        title: 'Komedi Gecesi',
        description: 'Ünlü komedyenlerin sahne alacağı eğlenceli bir gece.',
        date: '2024-12-25',
        category: 'Eğlence',
        image: '/images/event5.jpg',
        slug: 'komedi-gecesi',

      },  ];
  
  export default eventsData;
  