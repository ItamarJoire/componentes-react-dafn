import { Skeleton } from '../../ui/Skeleton'

export const SkeletonExample = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '320px' }}>
        <Skeleton variant="text" count={5} />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', maxWidth: '320px' }}>
        <Skeleton variant="circle" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
          <Skeleton variant="text" width="70%" />
          <Skeleton variant="text" width="40%" />
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          maxWidth: '320px',
          padding: '16px',
          border: '1px solid var(--border)',
          borderRadius: '8px'
        }}
      >
        <Skeleton variant="text" width="50%" />
        <Skeleton variant="text" width="30%" />
        <Skeleton variant="rect" height="140px" />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '480px' }}>
        {Array.from({ length: 4 }).map((_, row) => (
          <div key={row} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {Array.from({ length: 3 }).map((_, col) => (
              <div key={col}>
                <Skeleton variant="text" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
