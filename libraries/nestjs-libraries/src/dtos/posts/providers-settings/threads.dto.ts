import { IsOptional, Matches } from 'class-validator';
import { JSONSchema } from 'class-validator-jsonschema';

export class ThreadsDto {
  @IsOptional()
  @Matches(/^[^.&]{1,50}$/, {
    message:
      'Invalid topic tag. It must be 1-50 characters and cannot contain "." or "&"',
  })
  @JSONSchema({
    description:
      'Optional topic tag shown on the thread (1-50 characters, no "." or "&")',
  })
  topic_tag?: string;
}
