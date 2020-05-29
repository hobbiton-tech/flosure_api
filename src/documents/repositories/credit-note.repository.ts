import { EntityRepository, Repository } from 'typeorm';
import { CreditNote } from '../entities/credit-note.entity';

@EntityRepository(CreditNote)
export class CreditNoteRepository extends Repository<CreditNote> {}
