import { Timeline } from 'antd';
import { Chrome } from 'components/Chrome';
import { ReactNode } from 'react';

export function History() {
  return (
    <Chrome>
      <div className="container history">
        <h2>History</h2>
        <Timeline mode="alternate">
          {timeline.map((entry) => (
            <Timeline.Item key={String(entry)}>{entry}</Timeline.Item>
          ))}
        </Timeline>
      </div>
    </Chrome>
  );
}

function DateEntry({ children }: { children: ReactNode }) {
  return (
    <strong>
      <i className="fi fi-rr-calendar-plus" /> {children}:{' '}
    </strong>
  );
}

function MemberEntry({ children }: { children: ReactNode }) {
  return (
    <strong>
      <i className="fi fi-rr-man-head" /> {children}
    </strong>
  );
}

function SongEntry({ children }: { children: ReactNode }) {
  return (
    <strong>
      <i className="fi fi-rr-record-vinyl" /> {children}
    </strong>
  );
}

function AlbumEntry({ children }: { children: ReactNode }) {
  return (
    <strong>
      <i className="fi fi-rr-square" /> {children}
    </strong>
  );
}

const timeline = [
  <>
    <DateEntry>1997</DateEntry>
    <MemberEntry>3J</MemberEntry>, <MemberEntry>Bobak</MemberEntry>, and <MemberEntry>Leo</MemberEntry> debut
    as <strong>SQZ</strong> with a double A-side single (with <SongEntry>Hello</SongEntry> and{' '}
    <SongEntry>TBD</SongEntry>) with no clear positions but fair distribution of vocals.
  </>,
  <>
    SQZ records a third song <SongEntry>Lover, Squirrel Girl</SongEntry> but the song is not released. The
    group goes into a short hiatus for 6 months.
  </>,
  <>
    <DateEntry>1998</DateEntry> Management announces that two new members, <MemberEntry>Zachary</MemberEntry>{' '}
    and <MemberEntry>Bryan</MemberEntry>, are being added to the group and they are re-branded as{' '}
    <strong>Squirrel Zone</strong> adding the new members' vocals to which is well-received by the public.
  </>,
  <>
    A self-titled mini-album <AlbumEntry>Squirrel Zone</AlbumEntry> is released with the lead single{' '}
    <SongEntry>Lover, Squirrel Girl</SongEntry> with vocals from the new members being added to the track.
  </>,
  <>
    The other tracks <SongEntry>Karaoke</SongEntry> and <SongEntry>Scars</SongEntry> managed to chart.
  </>,
  <>
    Squirrel Zone debuts with the album <AlbumEntry>Squirrel Zone 101</AlbumEntry> being released with members
    taking clearer group positions: 3J as Main Vocals and Leader, Bobak as Main Rapper and Center, Leo as Main
    Dancer, Zachary as Vocalist and Lead Rapper, and Bryan as Vocalist and Visual.
  </>,
  <>
    <SongEntry>Basic Rules</SongEntry> is the lead single and a great success reaching #1 in all parades.
  </>,
  <>
    <DateEntry>1999</DateEntry> The second and final single <SongEntry>My Heart Belongs To You</SongEntry> is
    well-received.
  </>,
  <>
    A second album is in the works and in 2000, the lead single <SongEntry>Gimme Some Love</SongEntry> is
    dropped reaching #1.
  </>,
  <>
    The album <AlbumEntry>Welcome to Love</AlbumEntry> is released with 10 tracks.
  </>,
  <>
    The second single <SongEntry>TBD</SongEntry> is released.
  </>,
  <>
    A special Christmas single is released, titled <SongEntry>TBD</SongEntry>.
  </>,
  <>
    <DateEntry>2000</DateEntry> The album <AlbumEntry>In the Zone</AlbumEntry> is released with 11 tracks.
  </>,
  <>
    The first single <SongEntry>TBD</SongEntry> is released.
  </>,
  <>
    The second single <SongEntry>TBD</SongEntry> is released.
  </>,
  <>
    Squirrel Zone releases a charity single <SongEntry>TBD</SongEntry> with the girl group{' '}
    <strong>Doubt Girls</strong>
  </>,
  <>
    <DateEntry>2001</DateEntry> The album <AlbumEntry>The Stages of Self Tragedy</AlbumEntry> is released with
    10 tracks.
  </>,
  <>
    The first single <SongEntry>Wrong/Right</SongEntry> is released.
  </>,
  <>
    The second single <SongEntry>Photograph</SongEntry> is released.
  </>,
  <>
    The third single <SongEntry>TBD</SongEntry> is released.
  </>,
  <>
    In a shocking move, <MemberEntry>Leo</MemberEntry> announces he's leaving the group for personal reasons
  </>,
  <>
    A mini-album entitled <AlbumEntry>Solo</AlbumEntry> is released including solo songs of all members,
    including Leo.
  </>,
  <>
    The <AlbumEntry>Greatest Hits</AlbumEntry> album is released 3 months later containing the most popular
    songs of the group with a total of 14 tracks.
  </>,
  <>
    Squirrel Zone re-releases the compilation with a new name <AlbumEntry>Greatest Hits+</AlbumEntry>{' '}
    containing a remix of <SongEntry>Revitalized!</SongEntry> featuring the duck{' '}
    <MemberEntry>Fuduck</MemberEntry> and two new tracks featuring him <SongEntry>Gone</SongEntry> and{' '}
    <SongEntry>Quack!</SongEntry>.
  </>,
  <>
    Leo debuts his solo career and shockingly uses <SongEntry>Pressure</SongEntry>, his song in the Solo
    mini-album.
  </>,
  <>
    <strong>BREAKING NEWS!</strong> All 4 members of Squirrel Zone die in a plane crash. The world stops. Leo
    cancels promotions of his album and abandons entertainment career.
  </>,
  <>
    <DateEntry>2006</DateEntry> Stv network announces <strong>The Search for the Next Squirrels</strong>, a
    competition reality program that will select 5 young boys to form a new group. Leo is not involved.
  </>,
  <>
    The show starts with 30 participants competing during 10 episodes using most of the original discography.
    The public has mixed opinions of contestant <MemberEntry>JQ</MemberEntry> being the younger brother of
    original member 3J. However, the show is a success.
  </>,
  <>
    The final group <strong>Squirrel Zone II</strong> is formed with members <MemberEntry>Nicky</MemberEntry>{' '}
    as a Main Vocalist, Visual, and Leader, <MemberEntry>Robbie</MemberEntry> as Lead Vocalist and Rapper,{' '}
    <MemberEntry>Sypher</MemberEntry> (known during the show as TBD) as Main Rapper, under god{' '}
    <MemberEntry>Nathan</MemberEntry> as Vocalist and Visual, and <MemberEntry>JQ</MemberEntry> as Main
    Dancer, Vocalist, and Center.
  </>,
  <>
    <DateEntry>2007</DateEntry> The group releases debut album called <AlbumEntry>Nexus</AlbumEntry> with 10
    tracks including the 4 original songs used in the show.
  </>,
  <>
    The first single <SongEntry>Next Generation</SongEntry> is released praised for introducing well the new
    members to the world.
  </>,
  <>
    The second single <SongEntry>Everybody Wants to Be a Squirrel Girl</SongEntry> is released.
  </>,
  <>
    <DateEntry>2008</DateEntry> The second album <AlbumEntry>Level Up</AlbumEntry> is released.
  </>,
  <>
    The first single <SongEntry>Ooh-la-la</SongEntry> is released.
  </>,
  <>
    The second single <SongEntry>The Tree</SongEntry> is released.
  </>,
  <>
    Two subunits are formed and their mini-albums are released: <AlbumEntry>Super Cool</AlbumEntry> with
    members JQ, Sypher, and Nathan. and <AlbumEntry>Powerful</AlbumEntry> with members Nicky and Robbie.
  </>,
  <>
    <MemberEntry>Nicky comes out as gay</MemberEntry> and the group release a new song{' '}
    <SongEntry>Out Loud</SongEntry> in support.
  </>,
  <>
    <DateEntry>2009</DateEntry> A documentary about the first group and its rocky journey is released. Leo
    appears in the documentary speaking about about the problems with Bryan who is revealed to always having a
    bad personality. The release hurts the reputation of Squirrel Zone II.
  </>,
  <>
    <AlbumEntry>Forever: The Very Best of Squirrel Zone</AlbumEntry> is released.. The album contains 21
    tracks including 3 unreleased ones: <SongEntry>Just</SongEntry>, a song created from scraps of old
    recordings of the original group with the addition of the new members vocals. <SongEntry>Party</SongEntry>
    , a demo of the original group with new vocals added, and a brand new track entitled{' '}
    <SongEntry>Goodbye</SongEntry> from the new members featuring new vocals of <MemberEntry>Leo</MemberEntry>
    .
  </>,
  <>The group have a final concert which is sold out and have a special appearance of Leo.</>,
  <>The End.</>,
];
