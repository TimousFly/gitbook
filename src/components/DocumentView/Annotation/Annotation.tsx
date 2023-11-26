import { DocumentInlineAnnotation } from '@gitbook/api';

import { getNodeFragmentByType } from '@/lib/document';

import { AnnotationPopover } from './AnnotationPopover';
import { Blocks } from '../Blocks';
import { InlineProps } from '../Inline';
import { Inlines } from '../Inlines';

export async function Annotation(props: InlineProps<DocumentInlineAnnotation>) {
    const { inline, context, children } = props;

    const fragment = getNodeFragmentByType(inline, 'annotation-body');
    const content = children ?? <Inlines context={context} nodes={inline.nodes} />;

    if (!fragment) {
        return <>{content}</>;
    }

    return (
        <AnnotationPopover
            body={<Blocks ancestorBlocks={[]} context={context} nodes={fragment.nodes} />}
        >
            {content}
        </AnnotationPopover>
    );
}
