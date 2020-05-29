import { EntityRepository, Repository } from 'typeorm';
import { CoverNote } from '../entities/cover-note.entity';

@EntityRepository(CoverNote)
export class CoverNoteRepository extends Repository<CoverNote> {}
