import { Collection } from "@/types/collection";

export const collections: Collection[] = [
    {
      id: '1',
      title: 'Summer Photos 2024',
      thumbnail: 'https://images.unsplash.com/photo-1564419431636-fe02f0eff7aa?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: ['photo'],
        itemCount: 3,
      items: [
        {
          id: '1-1',
          type: 'photo',
          url: 'https://images.unsplash.com/photo-1464059728276-d877187d61a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Beach Sunset',
          createdAt: new Date('2024-01-15')
        },
        {
          id: '1-2',
          type: 'photo',
          url: 'https://images.unsplash.com/photo-1471500466955-85aecf33f71f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Pool Party',
          createdAt: new Date('2024-01-16')
        },
        {
          id: '1-3',
          type: 'photo',
          url: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'BBQ Evening',
          createdAt: new Date('2024-01-17')
        }
      ]
    },
    {
      id: '2',
      title: 'Product Videos',
      thumbnail: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        type: ['video'],
        itemCount: 2,
      items: [
        {
          id: '2-1',
          type: 'video',
          url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          title: 'Product Demo 1',
          createdAt: new Date('2024-02-01')
        },
        {
          id: '2-2',
          type: 'video',
          url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          title: 'Product Demo 2',
          createdAt: new Date('2024-02-02')
        }
      ]
    },
    {
      id: '3',
      title: 'Legal Documents',
      thumbnail: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        type: ['document'],
        itemCount: 2,
      items: [
        {
          id: '3-1',
          type: 'document',
          url: '/documents/terms.pdf',
          title: 'Terms & Conditions',
          createdAt: new Date('2024-01-20')
        },
        {
          id: '3-2',
          type: 'document',
          url: '/documents/privacy.pdf',
          title: 'Privacy Policy',
          createdAt: new Date('2024-01-21')
        }
      ]
    },
    {
      id: '4',
      title: 'Marketing Photos',
      thumbnail: 'https://images.unsplash.com/photo-1607703703520-bb638e84caf2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: ['photo'],
        itemCount: 4,
      items: [
        {
          id: '4-1',
          type: 'photo',
          url: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Campaign Shot 1',
          createdAt: new Date('2024-02-10')
        },
        {
          id: '4-2',
          type: 'photo',
          url: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Campaign Shot 2',
          createdAt: new Date('2024-02-11')
        }
      ]
    },
    {
      id: '5',
      title: 'Training Videos',
        thumbnail: 'https://images.pexels.com/photos/5837019/pexels-photo-5837019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        itemCount: 2,
      type: ['video'],
      items: [
        {
          id: '5-1',
          type: 'video',
          url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          title: 'Module 1',
          createdAt: new Date('2024-01-25')
        },
        {
          id: '5-2',
          type: 'video',
          url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          title: 'Module 2',
          createdAt: new Date('2024-01-26')
        }
      ]
    },
    {
      id: '6',
      title: 'Project Documents',
      thumbnail: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        type: ['document'],
        itemCount: 2,
      items: [
        {
          id: '6-1',
          type: 'document',
          url: '/documents/project-plan.pdf',
          title: 'Project Plan',
          createdAt: new Date('2024-02-15')
        },
        {
          id: '6-2',
          type: 'document',
          url: '/documents/timeline.pdf',
          title: 'Timeline',
          createdAt: new Date('2024-02-16')
        }
      ]
    },
    {
      id: '7',
      title: 'Event Photos',
      thumbnail: 'https://plus.unsplash.com/premium_photo-1664474653221-8412b8dfca3e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: ['photo'],
        itemCount: 10,
      items: [
        {
          id: '7-1',
          type: 'photo',
          url: 'https://plus.unsplash.com/premium_photo-1667514624736-177c3bdd8c59?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Conference Day 1',
          createdAt: new Date('2024-03-01')
        },
        {
          id: '7-2',
          type: 'photo',
          url: 'https://plus.unsplash.com/premium_photo-1664476566689-56544e223635?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Conference Day 2',
          createdAt: new Date('2024-03-02')
        }
      ]
    },
    {
      id: '8',
      title: 'Tutorial Videos',
      thumbnail: 'https://images.pexels.com/photos/5905918/pexels-photo-5905918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        type: ['video'],
        itemCount: 3,
      items: [
        {
          id: '8-1',
          type: 'video',
          url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          title: 'Getting Started',
          createdAt: new Date('2024-02-20')
        },
        {
          id: '8-2',
          type: 'video',
          url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          title: 'Advanced Features',
          createdAt: new Date('2024-02-21')
        }
      ]
    },
    {
      id: '9',
      title: 'Reports',
      thumbnail: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        type: ['document'],
        itemCount: 2,
      items: [
        {
          id: '9-1',
          type: 'document',
          url: '/documents/q1-report.pdf',
          title: 'Q1 Report',
          createdAt: new Date('2024-03-15')
        },
        {
          id: '9-2',
          type: 'document',
          url: '/documents/q2-report.pdf',
          title: 'Q2 Report',
          createdAt: new Date('2024-03-16')
        }
      ]
    }
  ]
  