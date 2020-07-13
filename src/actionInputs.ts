import { actionInputs as inputs } from 'github-actions-utils';

export const actionInputs = {
    ghToken: inputs.getString('ghToken', true, true),
    templateYmlFile: inputs.getWsPath('templateYmlFile', true),
    overrideTargetFile: inputs.getBool('overrideTargetFile', true),
    targetYmlFileName: inputs.getString('targetYmlFileName', false),
    targetBranch: inputs.getString('targetBranch', true),
    pushForce: inputs.getBool('pushForce', true),
    addTag: inputs.getString('addTag', false),
    gitUserEmail: inputs.getString('gitUserEmail', true),
    gitUserName: inputs.getString('gitUserName', true),
    envNewYmlFilePathVariable: inputs.getString('envNewYmlFilePathVariable', true),
    envRefVariable: inputs.getString('envRefVariable', true),
    envRefIsTagVariable: inputs.getString('envRefIsTagVariable', true)
}