
import { useEffect, useState } from 'react';

export default function Members() {
  const [membersInfo, setMembersInfo] = useState({});

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await fetch("/api/members");
        const data = await res.json();

        let categorizedMembers = {};

        if (Array.isArray(data.members)) {
          categorizedMembers = data.members.reduce((acc, member) => {
            const category = member[0];
            if (!acc[category]) acc[category] = [];
            acc[category].push(member);
            return acc;
          }, {});
        }

        setMembersInfo(categorizedMembers);
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div>
      {/* Render membersInfo here */}
    </div>
  );
}
