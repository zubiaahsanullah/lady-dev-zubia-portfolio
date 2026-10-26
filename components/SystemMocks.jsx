// Illustrated app screens for the ERP and CRM systems (example data).

function AppShell({ active, title, note, children }) {
  return (
    <div className="app" aria-hidden="true">
      <div className="side"><b />{[0, 1, 2, 3].map((i) => <i key={i} className={i === active ? 'on' : ''} />)}</div>
      <div className="main">
        <div className="ttl">{title} <span>{note}</span></div>
        {children}
      </div>
    </div>
  );
}

const Row = ({ av, color, name, sub, right }) => (
  <div className="row">
    <span className="av" style={{ background: color }}>{av}</span>
    <span className="nm">{name}<small>{sub}</small></span>
    {right}
  </div>
);

const Pill = ({ tone, children }) => <span className={`pl ${tone}`}>{children}</span>;

const Kpis = ({ items }) => (
  <div className="kpis">{items.map(([k, v]) => <div key={k} className="kpi"><small>{k}</small><b>{v}</b></div>)}</div>
);

export function AccountingMock() {
  const bars = [38, 52, 44, 61, 57, 70, 64, 78, 72, 84, 80, 96];
  return (
    <AppShell active={0} title="Sales overview" note="This year">
      <Kpis items={[['Revenue', 'Rs 4.82M'], ['Invoices', '312'], ['Receivable', 'Rs 640K']]} />
      <div className="bars">{bars.map((h, i) => <i key={i} className={i === bars.length - 1 ? 'hi' : ''} style={{ height: `${h}%` }} />)}</div>
      <div className="rows">
        <Row av="AT" color="#7b5cf1" name="INV-1042 · Ali Traders" sub="Rs 85,000" right={<Pill tone="g">Paid</Pill>} />
        <Row av="NS" color="#4fc9e3" name="INV-1041 · Noor Stores" sub="Rs 42,500" right={<Pill tone="a">Due</Pill>} />
      </div>
    </AppShell>
  );
}

export function EmployeeMock() {
  return (
    <AppShell active={1} title="Employees" note="48 staff">
      <div className="rows">
        <Row av="SA" color="#7b5cf1" name="Sana Ahmed" sub="HR" right={<Pill tone="g">Active</Pill>} />
        <Row av="BK" color="#131a35" name="Bilal Khan" sub="Sales" right={<Pill tone="g">Active</Pill>} />
        <Row av="MR" color="#4fc9e3" name="Maryam Riaz" sub="Accounts" right={<Pill tone="a">On leave</Pill>} />
        <Row av="UH" color="#b7a5ff" name="Usman Haider" sub="IT" right={<Pill tone="v">New</Pill>} />
      </div>
    </AppShell>
  );
}

export function AttendanceMock() {
  const people = [
    ['Sana A.', ['', '', '', 'l', '', 'o', 'o']],
    ['Bilal K.', ['', 'l', '', '', '', 'o', 'o']],
    ['Maryam R.', ['x', 'x', '', '', '', 'o', 'o']],
    ['Usman H.', ['', '', '', '', 'l', 'o', 'o']],
  ];
  return (
    <AppShell active={2} title="Attendance" note="This week">
      <div className="att">
        <span />
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => <span key={i} className="h">{d}</span>)}
        {people.map(([n, days]) => [
          <span key={n}>{n}</span>,
          ...days.map((c, i) => <i key={n + i} className={c} />),
        ])}
      </div>
      <Kpis items={[['Present', '42'], ['Late', '5'], ['Absent', '3']]} />
    </AppShell>
  );
}

export function StockMock() {
  return (
    <AppShell active={1} title="Stock" note="3 low">
      <div className="rows">
        <Row av="CB" color="#7b5cf1" name="Cement bags" sub="420" right={<span className="qty"><i style={{ width: '84%' }} /></span>} />
        <Row av="PP" color="#e0533f" name={'PVC pipe 2"'} sub="18" right={<span className="qty"><i className="low" style={{ width: '14%' }} /></span>} />
      </div>
      <div className="est">
        <div><span>EST-208 · Estimate</span><span>3 items</span></div>
        <div><span>Labour</span><span>Rs 35,000</span></div>
        <div><span>Total</span><span>Rs 124,500</span></div>
      </div>
    </AppShell>
  );
}

export function InfluencerMock() {
  return (
    <AppShell active={3} title="Influencers" note="Campaign: Eid">
      <div className="rows">
        <Row av="AZ" color="linear-gradient(135deg,#7b5cf1,#4fc9e3)" name="@aiza.styles" sub="128K · 4.8%" right={<Pill tone="g">Live</Pill>} />
        <Row av="HF" color="linear-gradient(135deg,#f9b300,#e0533f)" name="@hamza.food" sub="86K · 6.1%" right={<Pill tone="v">Invited</Pill>} />
        <Row av="ZT" color="linear-gradient(135deg,#131a35,#7b5cf1)" name="@zara.tech" sub="212K · 3.2%" right={<Pill tone="a">Review</Pill>} />
      </div>
    </AppShell>
  );
}
