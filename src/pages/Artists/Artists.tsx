import { Chrome } from 'components/Chrome';
import { SquirrelAvatar } from 'components/SquirrelAvatar';
import './Artists.scss';
import { Typography } from 'antd';
import { ArtistEntry, HSLColor } from 'types';

const parseColor = (color: string): HSLColor => {
  const [hue, saturation, lightness] = color.split(':');
  return { hue: Number(hue), saturation: Number(saturation), lightness: Number(lightness) };
};

export function Artists() {
  return (
    <Chrome>
      <div className="page artists">
        <Typography.Title>Artists</Typography.Title>
        <div className="content">
          <div className="members">
            {squirrelZoneI.map((member) => {
              return (
                <div className="member" key={member.name}>
                  <SquirrelAvatar dna={member.dna} color={parseColor(member.color)} />
                  <span className="member__name">{member.name}</span>
                </div>
              );
            })}
          </div>
          <p>JQ</p>
          <p>Nicky</p>
          <p>Robbie</p>
          <p>Sypher</p>
          <p>Nathan</p>
          <p>Fuduck</p>
          <p>Diana (Doubt Girls)</p>
          <p>Olivia (Doubt Girls)</p>
          <p>Ulla (Doubt Girls)</p>
          <p>Brittany (Doubt Girls)</p>
          <p>Tracy (Doubt Girls)</p>
          <p>Steph (SYK)</p>
          <p>Y.Y (SYK)</p>
          <p>Kav (SYK)</p>
          <p>... Relevant contestants</p>
        </div>
      </div>
    </Chrome>
  );
}

const squirrelZoneI: ArtistEntry[] = [
  {
    id: '3J',
    name: '3J',
    dna: '0:0:0:15:1:4:1:0:0:0:0:0:0:0:0:0:0:0',
    color: '40:50:50',
    type: 'artist',
    track: 'VOCAL',
    age: 18,
  },
  {
    id: 'Leo',
    name: 'Leo',
    dna: '0:2:0:0:2:1:0:0:9:3:4:0:0:1:0:0:0:0',
    color: '0:0:50',
    type: 'artist',
    track: 'DANCE',
    age: 18,
  },
  {
    id: 'Bobak',
    name: 'Bobak',
    dna: '2:3:1:0:2:9:11:0:4:2:3:0:0:4:0:0:0:0',
    color: '0:0:50',
    type: 'artist',
    track: 'RAP',
    age: 18,
  },
  {
    id: 'Zachary',
    name: 'Zachary',
    dna: '2:2:2:5:0:12:13:0:0:2:5:3:0:0:0:0:0:0',
    color: '0:0:50',
    type: 'artist',
    track: 'VOCAL',
    age: 18,
  },
  {
    id: 'Bryan',
    name: 'Bryan',
    dna: '1:2:1:0:4:6:5:0:0:1:10:1:0:0:0:0:0:0',
    color: '0:0:50',
    type: 'artist',
    track: 'VOCAL',
    age: 18,
  },
];
