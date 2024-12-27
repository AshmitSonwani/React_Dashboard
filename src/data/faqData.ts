export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: 'customize',
    question: 'How do I customize my dashboard?',
    answer: 'You can customize your dashboard by going to the Settings tab. There, you\'ll find options to change the default view, refresh rate, and which widgets appear on your dashboard. You can also drag and drop widgets to rearrange them according to your preferences.'
  },
  {
    id: 'export',
    question: 'Can I export my analytics data?',
    answer: 'Yes, you can export your analytics data in various formats including CSV, PDF, and Excel. Look for the export button in the top right corner of any chart or widget. You can also schedule regular exports through the Settings tab.'
  },
  {
    id: 'updates',
    question: 'How often is the data updated?',
    answer: 'By default, dashboard data is updated in real-time for critical metrics and every 5 minutes for general analytics. You can adjust the refresh rate in Settings to match your needs, with options ranging from 30 seconds to 15 minutes.'
  },
  {
    id: 'metrics',
    question: 'What do the different metrics mean?',
    answer: 'Each metric provides unique insights into your application\'s performance. Active Users shows current users, Session Duration indicates engagement levels, Bounce Rate measures single-page visits, and Conversion Rate tracks goal completions. Hover over any metric for a detailed explanation.'
  },
  {
    id: 'alerts',
    question: 'How do I set up alerts?',
    answer: 'Navigate to Settings > Alerts to configure custom alerts. You can set thresholds for any metric and choose to receive notifications via email, SMS, or in-dashboard notifications when these thresholds are crossed.'
  }
];