import { CopyOutlined } from '@ant-design/icons';
import { Button, Layout } from 'antd';
import clsx from 'clsx';
import { Chrome } from 'components/Chrome';
import { SquirrelAvatar } from 'components/SquirrelAvatar';
import { useState } from 'react';
import { useCopyToClipboard } from 'react-use';
import './CreateDNA.scss';

const blankDNA = Array(18).fill(0);

export function CreateDNA() {
  const [dna, setDna] = useState<number[]>(Array(18).fill(0));
  const dnaStr = dna.join(':');
  const [, copyToClipboard] = useCopyToClipboard();

  const updateDNA = (index: number, value: number) => {
    setDna((prevState) => {
      const copy = [...prevState];
      copy[index] = value;
      return copy;
    });
  };

  const resetDNA = () => setDna(blankDNA);

  return (
    <Chrome>
      <div className="container create-dna">
        <h2>/create-dna</h2>

        <Layout className="create-dna__container">
          <Layout.Sider className="create-dna__section" width={300}>
            <div className="main-sample">
              <SquirrelAvatar
                dna={dnaStr}
                color={{
                  hue: 0,
                  saturation: 0,
                  lightness: 50,
                }}
              />
              <div className="">
                {dnaStr} <Button icon={<CopyOutlined />} onClick={() => copyToClipboard(dnaStr)} />{' '}
              </div>
              <Button onClick={resetDNA}>Reset</Button>
            </div>
          </Layout.Sider>
          <Layout.Content className="create-dna__section">
            <div className="samples-container">
              {samples.map((entry) => {
                return (
                  <div className="sample-entry" key={entry.name}>
                    <h3>
                      {entry.name} [{entry.index}] : {entry.complete} / {entry.variations}
                    </h3>
                    <div className="samples">
                      {makeNewArray(entry.variations).map((_, index) => (
                        <button
                          key={index}
                          className={clsx('sample', dna[entry.index] === index && 'sample--active')}
                          onClick={() => updateDNA(entry.index, index)}
                        >
                          <SquirrelAvatar
                            dna={modifyDNA(dna, entry.index, index)}
                            color={{
                              hue: 0,
                              saturation: 0,
                              lightness: 50,
                            }}
                          />
                          <span>{index}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </Layout.Content>
        </Layout>
      </div>
    </Chrome>
  );
}

const mockDNA = (targetIndex: number, variations: number) => {
  return new Array(variations).fill(0).map((_, index) => {
    return new Array(18)
      .fill(0)
      .map((_, i) => {
        if (i === targetIndex) {
          return index;
        }
        return 0;
      })
      .join(':');
  });
};

const makeNewArray = (length: number) => new Array(length).fill(0);

const modifyDNA = (dna: number[], index: number, value: number): string => {
  const copy = [...dna];
  copy[index] = value;
  return copy.join(':');
};

const buildSamples = () => {
  return [
    {
      name: 'fur-color',
      index: 0,
      samples: mockDNA(0, 16),
      variations: 16,
      complete: 0,
    },
    {
      name: 'fur-type',
      index: 1,
      samples: mockDNA(1, 4),
      variations: 4,
      complete: 4,
    },
    {
      name: 'snout-color',
      index: 2,
      samples: mockDNA(2, 4),
      variations: 4,
      complete: 4,
    },
    {
      name: 'snout-mouth',
      index: 3,
      samples: mockDNA(3, 16),
      variations: 16,
      complete: 16, // mouth-14
    },
    {
      name: 'snout-nose',
      index: 4,
      samples: mockDNA(4, 8),
      variations: 8,
      complete: 8, // nose-2
    },
    {
      name: 'eye-color',
      index: 5,
      samples: mockDNA(5, 16),
      variations: 16,
      complete: 16,
    },
    {
      name: 'eye-lids',
      index: 6,
      samples: mockDNA(6, 16),
      variations: 16,
      complete: 16,
    },
    {
      name: 'face-hair',
      index: 7,
      samples: mockDNA(7, 16),
      variations: 16,
      complete: 0,
    },
    {
      name: 'face-variations',
      index: 8,
      samples: mockDNA(8, 16),
      variations: 16,
      complete: 0,
    },
    {
      name: 'hair-bangs',
      index: 9,
      samples: mockDNA(9, 32),
      variations: 32,
      complete: 4,
    },
    {
      name: 'hair-color',
      index: 10,
      samples: mockDNA(10, 16),
      variations: 16,
      complete: 16,
    },
    {
      name: 'hair-type',
      index: 11,
      samples: mockDNA(11, 32),
      variations: 32,
      complete: 22,
    },
    {
      name: 'accessories-arm',
      index: 12,
      samples: mockDNA(12, 16),
      variations: 16,
      complete: 0,
    },
    {
      name: 'accessories-ear',
      index: 13,
      samples: mockDNA(13, 4),
      variations: 4,
      complete: 0,
    },
    {
      name: 'accessories-eyebrow',
      index: 14,
      samples: mockDNA(14, 4),
      variations: 4,
      complete: 0,
    },
    {
      name: 'accessories-eyes',
      index: 15,
      samples: mockDNA(15, 4),
      variations: 4,
      complete: 0,
    },
    {
      name: 'accessories-head',
      index: 16,
      samples: mockDNA(16, 4),
      variations: 4,
      complete: 0,
    },
    {
      name: 'accessories-nose',
      index: 17,
      samples: mockDNA(17, 4),
      variations: 4,
      complete: 0,
    },
  ];
};

const samples = buildSamples();
