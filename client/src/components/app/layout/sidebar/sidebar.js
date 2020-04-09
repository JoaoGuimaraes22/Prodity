import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <nav>
        <ul>
          <Link href="/app/home">
            <a>
              <li>Inbox</li>
            </a>
          </Link>
          <Link href="/app/today">
            <a>
              <li>Today</li>
            </a>
          </Link>
          <Link href="/app/nextseven">
            <a>
              <li>Next 7 Days</li>
            </a>
          </Link>
        </ul>
        <Projects projects={projects} />
      </nav>
    </>
  );
};

export default Sidebar;
