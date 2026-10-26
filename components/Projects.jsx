import Image from 'next/image';
import { WEBSITES } from '@/data/content';
import { AccountingMock, EmployeeMock, AttendanceMock, StockMock, InfluencerMock } from './SystemMocks';

const SYSTEMS = [
  { cls: 'wide', Mock: AccountingMock, title: 'Accounting and Sales System', text: 'Invoices, payments, receivables and sales reports in one place.', tags: ['Accounting', 'Sales', 'Reports'] },
  { cls: '', Mock: EmployeeMock, title: 'Employee Management System', text: 'Staff records, departments, roles and leave.', tags: ['HR', 'Employees'], delay: 0.1 },
  { cls: '', Mock: AttendanceMock, title: 'Attendance System', text: 'Daily check-ins, late marks and monthly attendance.', tags: ['Attendance', 'HR'] },
  { cls: '', Mock: StockMock, title: 'Stock and Estimates', text: 'Inventory levels, low-stock alerts and customer estimates.', tags: ['Inventory', 'Estimates'], delay: 0.1 },
  { cls: '', Mock: InfluencerMock, title: 'Influencers System', text: 'Influencer profiles, campaigns and engagement in one CRM.', tags: ['CRM', 'Campaigns'], delay: 0.2 },
];

export default function Projects() {
  return (
    <section className="s in" id="projects" aria-labelledby="ph">
      <div className="shead rv"><div><span className="eyebrow">Projects</span><h2 id="ph" style={{ marginTop: 12 }}>Selected work</h2></div><p>Websites for real businesses, and the ERP and CRM systems I have built.</p></div>
      <div className="pgrid">
        {WEBSITES.map((w, i) => (
          <article key={w.title} className="proj rv-c" style={{ animationDelay: `${(i % 2) * 0.1}s` }}>
            <div className="frame">
              <div className="bar"><i /><i /><i /><span /></div>
              <div className="shot"><Image src={w.img} alt={`${w.title} website, home page`} fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
            </div>
            <div className="pmeta"><div><h3>{w.title}</h3><p>{w.text}</p></div><span className="num">{String(i + 1).padStart(2, '0')}</span></div>
          </article>
        ))}
      </div>

      <div className="subhead rv"><h3>ERP and CRM systems</h3><span /><em>{String(SYSTEMS.length).padStart(2, '0')} systems</em></div>
      <div className="sys">
        {SYSTEMS.map(({ cls, Mock, title, text, tags, delay = 0 }) => (
          <article key={title} className={`sysc ${cls} rv-c`} style={{ animationDelay: `${delay}s` }}>
            <Mock />
            <h3>{title}</h3>
            <p>{text}</p>
            <div className="tags">{tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
