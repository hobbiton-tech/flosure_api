import { EntityRepository, Repository } from 'typeorm';
import { DebitNote } from '../entities/debit-note.entity';

@EntityRepository(DebitNote)
export class DebitNoteRepository extends Repository<DebitNote> {}
