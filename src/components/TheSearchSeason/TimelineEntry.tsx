import { Timeline, TimelineItemProps } from 'antd';
import clsx from 'clsx';
import { Icon } from 'components/Icons';
import './TimelineEntry.scss';

type TimelineEntryProps = {
  type: 'host' | 'event' | 'info' | 'video';
} & TimelineItemProps;

export function TimelineEntry({ type, children, ...rest }: TimelineEntryProps) {
  return (
    <Timeline.Item {...rest}>
      <div className={clsx('timeline-entry', `timeline-entry--${type}`)}>
        <div>
          {type === 'host' && <Icon type="megaphone" />}
          {type === 'video' && <Icon type="live-news" />}
          {type === 'event' && <Icon type="messages" />}
        </div>

        <div className="timeline-entry__content">{children}</div>
      </div>
    </Timeline.Item>
  );
}
