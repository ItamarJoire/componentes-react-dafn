import { useState, type FormEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
  faEllipsisVertical,
  faTrash,
  faDownload,
  faChevronLeft,
  faChevronRight,
  faSquareCheck,
  faSquare
} from '@fortawesome/free-solid-svg-icons'
import type { TableProps } from './types'
import styles from './Table.module.scss'

const CHECKBOX_COL_WIDTH = 72

export const Table = <T,>({
  title,
  columns,
  data,
  getRowId,
  rowActions = [],
  selectable = false,
  onSearch,
  onMoreOptions,
  onDelete,
  onDownload,
  pagination,
  className = ''
}: TableProps<T>) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [searchValue, setSearchValue] = useState('')
  const [showCheckboxes, setShowCheckboxes] = useState(true)

  const checkboxesActive = selectable && showCheckboxes

  const toggleCheckboxes = () => {
    setSelectedIds([])
    setShowCheckboxes(current => !current)
  }

  const isRowSelected = (row: T) => selectedIds.includes(getRowId(row))
  const isAllSelected = data.length > 0 && data.every(isRowSelected)

  const toggleRow = (row: T) => {
    const id = getRowId(row)
    setSelectedIds(current => (current.includes(id) ? current.filter(selectedId => selectedId !== id) : [...current, id]))
  }

  const toggleAll = () => {
    setSelectedIds(isAllSelected ? [] : data.map(getRowId))
  }

  const handleSearchSubmit = (event: FormEvent) => {
    event.preventDefault()
    onSearch?.(searchValue)
  }

  const handleDelete = () => {
    onDelete?.(selectedIds)
    setSelectedIds([])
  }

  const handleDownload = () => {
    onDownload?.(selectedIds)
  }

  const firstColLeft = checkboxesActive ? CHECKBOX_COL_WIDTH : 0

  const pageSizeOptions = pagination?.pageSizeOptions ?? [10, 20, 50]
  const totalPages = pagination ? Math.max(1, Math.ceil(pagination.totalItems / pagination.pageSize)) : 0
  const firstItem = pagination ? (pagination.totalItems === 0 ? 0 : (pagination.page - 1) * pagination.pageSize + 1) : 0
  const lastItem = pagination ? Math.min(pagination.page * pagination.pageSize, pagination.totalItems) : 0

  return (
    <div className={`${styles['table-card']}${className ? ` ${className}` : ''}`}>
      <div className={styles['table-header']}>
        {title && <h2 className={styles['table-title']}>{title}</h2>}

        <div className={styles['table-header-actions']}>
          <form role="search" className={styles['search-form']} onSubmit={handleSearchSubmit}>
            <div className={styles['search-field']}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={styles['search-field-icon']}
                style={{ width: 14, height: 14 }}
              />
              <input
                type="search"
                value={searchValue}
                onChange={event => setSearchValue(event.target.value)}
                placeholder="Buscar"
                aria-label="Buscar"
              />
            </div>
            <button type="submit" className={styles['search-submit']}>
              Buscar
            </button>
          </form>
          {selectable && (
            <button
              type="button"
              className={styles['icon-btn']}
              aria-label={showCheckboxes ? 'Remover seleção' : 'Habilitar seleção'}
              aria-pressed={showCheckboxes}
              onClick={toggleCheckboxes}
            >
              <FontAwesomeIcon icon={showCheckboxes ? faSquareCheck : faSquare} style={{ width: 18, height: 18 }} />
            </button>
          )}
          {onMoreOptions && (
            <button type="button" className={styles['icon-btn']} aria-label="Mais opções" onClick={onMoreOptions}>
              <FontAwesomeIcon icon={faEllipsisVertical} style={{ width: 18, height: 18 }} />
            </button>
          )}
        </div>
      </div>

      {checkboxesActive && selectedIds.length > 0 && (
        <div className={styles['selection-bar']}>
          <span>
            {selectedIds.length} {selectedIds.length === 1 ? 'item selecionado' : 'itens selecionados'}
          </span>
          <div className={styles['selection-actions']}>
            <button type="button" onClick={handleDelete}>
              <FontAwesomeIcon icon={faTrash} style={{ width: 16, height: 16 }} />
              Excluir
            </button>
            <button type="button" onClick={handleDownload}>
              <FontAwesomeIcon icon={faDownload} style={{ width: 16, height: 16 }} />
              Download
            </button>
          </div>
        </div>
      )}

      <div className={styles['table-scroll']}>
        <table className={styles['table']}>
          <thead>
            <tr>
              {checkboxesActive && (
                <th className={`${styles['checkbox-col']} ${styles['sticky-col']}`} style={{ left: 0 }}>
                  <input type="checkbox" checked={isAllSelected} onChange={toggleAll} aria-label="Selecionar todos" />
                </th>
              )}
              {columns.map((column, index) => (
                <th
                  key={column.key}
                  className={index === 0 ? styles['sticky-col'] : ''}
                  style={{ textAlign: column.align ?? 'left', ...(index === 0 ? { left: firstColLeft } : null) }}
                >
                  {column.label}
                </th>
              ))}
              {rowActions.length > 0 && <th className={styles['actions-col']} />}
            </tr>
          </thead>
          <tbody>
            {data.map(row => {
              const rowId = getRowId(row)
              const selected = isRowSelected(row)

              return (
                <tr key={rowId} className={selected ? styles['is-selected'] : ''}>
                  {checkboxesActive && (
                    <td className={`${styles['checkbox-col']} ${styles['sticky-col']}`} style={{ left: 0 }}>
                      <input
                        type="checkbox"
                        checked={selected}
                        onChange={() => toggleRow(row)}
                        aria-label="Selecionar item"
                      />
                    </td>
                  )}
                  {columns.map((column, index) => (
                    <td
                      key={column.key}
                      className={index === 0 ? styles['sticky-col'] : ''}
                      style={{ textAlign: column.align ?? 'left', ...(index === 0 ? { left: firstColLeft } : null) }}
                    >
                      {column.render ? column.render(row) : String((row as Record<string, unknown>)[column.key] ?? '')}
                    </td>
                  ))}
                  {rowActions.length > 0 && (
                    <td className={styles['actions-col']}>
                      <div className={styles['actions-inner']}>
                        {rowActions.map(action => (
                          <button
                            key={action.label}
                            type="button"
                            className={styles['icon-btn']}
                            aria-label={action.label}
                            onClick={() => action.onClick(row)}
                          >
                            {action.icon}
                          </button>
                        ))}
                      </div>
                    </td>
                  )}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {pagination && (
        <div className={styles['table-footer']}>
          <label className={styles['page-size']}>
            Exibir
            <select
              value={pagination.pageSize}
              onChange={event => pagination.onPageSizeChange(Number(event.target.value))}
            >
              {pageSizeOptions.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <span className={styles['items-count']}>
            {firstItem}-{lastItem} de {pagination.totalItems} itens
          </span>

          <label className={styles['page-select']}>
            Página
            <select value={pagination.page} onChange={event => pagination.onPageChange(Number(event.target.value))}>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(pageNumber => (
                <option key={pageNumber} value={pageNumber}>
                  {pageNumber}
                </option>
              ))}
            </select>
          </label>

          <div className={styles['page-nav']}>
            <button
              type="button"
              aria-label="Página anterior"
              disabled={pagination.page <= 1}
              onClick={() => pagination.onPageChange(pagination.page - 1)}
            >
              <FontAwesomeIcon icon={faChevronLeft} style={{ width: 14, height: 14 }} />
            </button>
            <button
              type="button"
              aria-label="Próxima página"
              disabled={pagination.page >= totalPages}
              onClick={() => pagination.onPageChange(pagination.page + 1)}
            >
              <FontAwesomeIcon icon={faChevronRight} style={{ width: 14, height: 14 }} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
