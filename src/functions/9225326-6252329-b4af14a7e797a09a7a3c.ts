import { app, InvocationContext } from "@azure/functions";
import * as https from "https";
import * as df from 'durable-functions';
import { ActivityHandler, OrchestrationContext, OrchestrationHandler } from 'durable-functions';

codigo que reemplazó al antiguo

export async function serviceBusQueueTrigger(message: unknown, context: InvocationContext): Promise<void> {
    context.log('Service bus queue function processed message:', message);
    const client = df.getClient(context);
    const instanceId: string = await client.startNew("9225326-6252329-b4af14a7e797a09a7a3c", message);
    context.log(`Started orchestration with ID = '${instanceId}'.`);
}
app.serviceBusQueue('9225326-6252329-b4af14a7e797a09a7a3c', {
    connection: 'connection',
    queueName: '9225326-6252329-b4af14a7e797a09a7a3c',
    handler: serviceBusQueueTrigger,
    extraInputs: [df.input.durableClient()],
});